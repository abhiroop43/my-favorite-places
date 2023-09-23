import { AppConfig } from "../App.config";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/geojson(%7B%22type%22%3A%22Point%22%2C%22coordinates%22%3A%5B${lng}%2C${lat}%5D%7D)/${lng},${lat},16/400x200?access_token=${AppConfig.mapBoxApiKey}`;
  return imagePreviewUrl;
}
