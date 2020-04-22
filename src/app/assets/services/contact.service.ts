import * as models from "../models";

export class ContactService {
  contact = new models.Contact(
    "27 rue René Cassin",
    "59790",
    "Ronchin",
    "07 61 76 80 26",
    "mortelier.antoine@hotmail.fr",
    [
      new models.License(
        "B",
        new models.Picture("./assets/pic/car.png", "car")
      ),
      new models.License(
        "A2",
        new models.Picture("./assets/pic/bike.png", "bike")
      ),
      new models.License(
        "Côtier",
        new models.Picture("./assets/pic/boat.png", "boat")
      ),
    ]
  );
}
