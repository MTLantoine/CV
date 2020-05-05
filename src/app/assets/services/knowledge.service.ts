import * as models from "../models";

export class KnowledgeService {
  connaissance = new models.Passion("Connaissances", [
    // Framework
    new models.OnePassion("Framework", [
      new models.OneExample(
        "AngularJS",
        new models.Picture("./assets/pic/svg/angularjs.svg", "AngularJS")
      ),
    ]),

    // IDE
    new models.OnePassion("IDE", [
      new models.OneExample(
        "Visual Studo Code",
        new models.Picture("./assets/pic/svg/vs.svg", "Visual Studo Code")
      ),
      new models.OneExample(
        "Eclipse",
        new models.Picture("./assets/pic/svg/eclipse.svg", "Eclipse")
      ),
    ]),

    // Versioning
    new models.OnePassion("Versioning", [
      new models.OneExample(
        "GitHub",
        new models.Picture("./assets/pic/svg/github-black.svg", "GitHub")
      ),
    ]),
  ]);
}
