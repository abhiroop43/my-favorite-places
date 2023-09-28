import { AppConfig } from "../config";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/geojson(%7B%22type%22%3A%22Point%22%2C%22coordinates%22%3A%5B${lng}%2C${lat}%5D%7D)/${lng},${lat},16/400x200?access_token=${AppConfig.mapBoxApiKey}`;
  return imagePreviewUrl;
}


export async function getAddress(lat, lng) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${AppConfig.mapBoxApiKey}`;
  const response = await fetch(url);

  if(!response.ok) {
    throw new Error('Failed to fetch address.')
  }

  const data = await response.json();
  const address = data.features[0].place_name;
  return address;
}
