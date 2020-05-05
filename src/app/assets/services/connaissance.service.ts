import * as models from "../models";

export class ConnaissanceService {
  connaissance = new models.Passion("Connaissances", [
    // Framework
    new models.OnePassion("Framework", [
      new models.OneExample(
        "AngularJS",
        new models.Picture("./assets/pic/svg/game-controller.svg", "AngularJS")
      ),
    ]),

    // IDE
    new models.OnePassion("IDE", [
      new models.OneExample(
        "Visual Studo Code",
        new models.Picture("./assets/pic/svg/swim.svg", "Visual Studo Code")
      ),
      new models.OneExample(
        "Eclipse",
        new models.Picture("./assets/pic/svg/gym.svg", "Eclipse")
      ),
    ]),

    // Versioning
    new models.OnePassion("Versioning", [
      new models.OneExample(
        "GitHub",
        new models.Picture("./assets/pic/svg/piano.svg", "GitHub")
      ),
    ]),
  ]);
}
