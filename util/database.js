import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";

const database = SQLite.openDatabase("places.db");

export function init() {
  return new Promise((resolve, reject) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUrl TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
    )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        },
      );
    });
  });
}

export function insertPlace(place) {
  return new Promise((resolve, reject) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `INSERT INTO places (title, imageUrl, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, resultSet) => {
          // console.log(resultSet);
          resolve(resultSet);
        },
        (_, error) => {
          reject(error);
        },
      );
    });
  });
}

export function fetchPlaces() {
  return new Promise((resolve, reject) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        "SELECT * from places",
        [],
        (_, resultSet) => {
          const places = [];

          for (const dbPlace of resultSet.rows._array) {
            places.push(
              new Place(
                dbPlace.title,
                dbPlace.imageUrl,
                {
                  address: dbPlace.address,
                  lat: dbPlace.lat,
                  lng: dbPlace.lng,
                },
                dbPlace.id,
              ),
            );
          }
          // console.log(places);
          resolve(places);
        },
        (_, error) => {
          console.log(error);
          reject(error);
        },
      );
    });
  });
}
