import * as models from "../models";

export class KnowledgeService {
  connaissance = new models.Passion("Connaissances", [
    // Framework
    new models.OnePassion("Framework", [
      new models.OneExample(
        "Angular",
        new models.Picture("./assets/pic/svg/angularjs.svg", "Angular")
      ),
      new models.OneExample(
        "VueJS",
        new models.Picture("./assets/pic/svg/vuejs.svg", "VueJS")
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
        "Git",
        new models.Picture("./assets/pic/svg/git.svg", "Git")
      ),
      new models.OneExample(
        "GitHub",
        new models.Picture("./assets/pic/svg/github-black.svg", "GitHub")
      ),
      new models.OneExample(
        "GitLab",
        new models.Picture("./assets/pic/svg/gitlab.svg", "GitLab")
      ),
    ]),
  ]);
}
