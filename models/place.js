import { generateUniqueId } from "../util/helper";

export class Place {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; // {lat: 100, lng: 100}
    this.id = id; // generateUniqueId();
  }
}
