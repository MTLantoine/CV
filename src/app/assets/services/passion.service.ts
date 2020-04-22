import * as models from "../models";

export class PassionService {
  passion = new models.Passion("Passions", [
    new models.OnePassion("Sport", [
      "Natation en club",
      "Musculation",
      "Cyclisme",
    ]),
    new models.OnePassion("Musique", ["Piano", "Guitare"]),
    new models.OnePassion("Informatique", ["Jeux vidéo", "Programmation"]),
  ]);
}
