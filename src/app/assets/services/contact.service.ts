import * as models from "../models";

export class ContactService {
  contact = new models.Contact(
    "CATHY HOUDART",
    "CATHY HOUDART",
    "CATHY HOUDART",
    "CATHY HOUDART",
    "CATHY HOUDART",
    [
      new models.License(
        "CATHY HOUDART",
        new models.Picture("./assets/pic/car.png", "car")
      ),
      new models.License(
        "CATHY HOUDART",
        new models.Picture("./assets/pic/bike.png", "bike")
      ),
      new models.License(
        "CATHY HOUDART",
        new models.Picture("./assets/pic/boat.png", "boat")
      ),
    ]
  );
}
