import { generateUniqueId } from "../util/helper";

class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // {lat: 100, lng: 100}
    this.id = generateUniqueId();
  }
}
