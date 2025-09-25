import * as models from "../models";

export class KnowledgeService {
  connaissance = new models.Passion("Compétences", [
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
      new models.OneExample(
        "NextJS",
        new models.Picture("./assets/pic/svg/next-js.svg", "NextJS")
      ),
    ]),

    // IDE
    new models.OnePassion("Technos", [
      new models.OneExample(
        "React",
        new models.Picture("./assets/pic/svg/react.png", "React")
      ),
      new models.OneExample(
        "JavaScript",
        new models.Picture("./assets/pic/svg/javascript.svg", "JavaScript")
      ),
      new models.OneExample(
        "TypeScript",
        new models.Picture("./assets/pic/svg/typescript.svg", "TypeScript")
      ),
      new models.OneExample(
        "HTML",
        new models.Picture("./assets/pic/svg/html.png", "HTML")
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
      new models.OneExample(
        "Azure DevOps",
        new models.Picture("./assets/pic/svg/azure-devops.svg", "Azure DevOps")
      ),
    ]),

    // Skills
    new models.OnePassion("Soft skills", [
      new models.OneExample(
        "Autonomie"
      ),
      new models.OneExample(
        "Résilience"
      ),
      new models.OneExample(
        "Curiosité"
      ),
      new models.OneExample(
        "Rigueur"
      ),
      new models.OneExample(
        "Adaptabilité"
      ),
    ]),
  ]);
}
