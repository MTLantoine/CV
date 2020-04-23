import * as models from "../models";

export class GithubService {
  github = new models.Text("GitHub", [
    new models.OneText(
      "Vous pouvez retrouvez la majorité de mes projets personnels et universitaires sur ce lien :"
    ),
    new models.OneText(
      "github.com/MTLantoine",
      new models.Picture("./assets/pic/svg/github.svg", " GitHub")
    ),
  ]);
}
