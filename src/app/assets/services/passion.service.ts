import * as models from "../models";

export class PassionService {
  passion = new models.Passion("Passions", [
    // Informatique
    new models.OnePassion("Informatique", [
      new models.OneExample(
        "Jeux vidéo",
        new models.Picture("./assets/pic/svg/game-controller.svg", "Jeux vidéo")
      ),
      new models.OneExample(
        "Programmation",
        new models.Picture(
          "./assets/pic/svg/web-development.svg",
          "Programmation"
        )
      ),
    ]),

    // Sport
    new models.OnePassion("Sport", [
      new models.OneExample(
        "Natation en club",
        new models.Picture("./assets/pic/svg/swim.svg", "Natation en club")
      ),
      new models.OneExample(
        "Musculation",
        new models.Picture("./assets/pic/svg/gym.svg", "Musculation")
      ),
      new models.OneExample(
        "Cyclisme",
        new models.Picture("./assets/pic/svg/bycicle.svg", "Cyclisme")
      ),
    ]),

    // Musique
    new models.OnePassion("Musique", [
      new models.OneExample(
        "Piano",
        new models.Picture("./assets/pic/svg/piano.svg", "Piano")
      ),
      new models.OneExample(
        "Guitare",
        new models.Picture("./assets/pic/svg/music.svg", "Guitare")
      ),
    ]),
  ]);
}
