import * as models from "../models";

export class ContactService {
  contact = new models.Contact(
    "92 rue du Capitaine Jasmin",
    "59133",
    "Phalempin",
    "07 61 76 80 26",
    "mortelier.antoine@hotmail.fr",
    [
      new models.License(
        "B",
        new models.Picture("./assets/pic/car.png", "car")
      ),
      new models.License(
        "A",
        new models.Picture("./assets/pic/bike.png", "bike")
      ),
      new models.License(
        "Côtier",
        new models.Picture("./assets/pic/boat.png", "boat")
      ),
    ]
  );
}
