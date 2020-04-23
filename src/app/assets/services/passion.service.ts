import * as models from "../models";

export class PassionService {
  passion = new models.Passion("CATHY HOUDART", [
    // Sport
    new models.OnePassion("CATHY HOUDART", [
      new models.OneExample(
        "CATHY HOUDART",
        new models.Picture("./assets/pic/svg/swim.svg", "Natation en club")
      ),
      new models.OneExample(
        "CATHY HOUDART",
        new models.Picture("./assets/pic/svg/gym.svg", "Musculation")
      ),
      new models.OneExample(
        "CATHY HOUDART",
        new models.Picture("./assets/pic/svg/bycicle.svg", "Cyclisme")
      ),
    ]),

    // Musique
    new models.OnePassion("CATHY HOUDART", [
      new models.OneExample(
        "CATHY HOUDART",
        new models.Picture("./assets/pic/svg/piano.svg", "Piano")
      ),
      new models.OneExample(
        "CATHY HOUDART",
        new models.Picture("./assets/pic/svg/music.svg", "Guitare")
      ),
    ]),

    // Informatique
    new models.OnePassion("CATHY HOUDART", [
      new models.OneExample(
        "CATHY HOUDART",
        new models.Picture("./assets/pic/svg/game-controller.svg", "Jeux vidéo")
      ),
      new models.OneExample(
        "CATHY HOUDART",
        new models.Picture(
          "./assets/pic/svg/web-development.svg",
          "Programmation"
        )
      ),
    ]),
  ]);
}
