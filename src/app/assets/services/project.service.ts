import * as models from "../models";

export class ProjectService {
  project = new models.Project("Projets", [
    new models.OneProject(
      "donjon-et-dragon",
      "Donjon et Dragon",
      new models.Picture(
        "./assets/pic/project/dungeon-and-dragon.png",
        "Dugeon and Dragon"
      )
    ),
    new models.OneProject(
      "plugin",
      "Une histoire de plugins",
      new models.Picture("./assets/pic/project/plugin.jpg", "Plugin")
    ),
    new models.OneProject(
      "lettre",
      "Simulation d'envoie de courriers",
      new models.Picture("./assets/pic/project/post.png", "Post")
    ),
    new models.OneProject(
      "questionnaire",
      "Questionnaire",
      new models.Picture(
        "./assets/pic/project/questionnaire.png",
        "Questionnaire"
      )
    ),
  ]);
}
