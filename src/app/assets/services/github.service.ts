import * as models from "../models";

export class GithubService {
  github = new models.Text(
    "CATHY HOUDART",
    [
      new models.OneText("CATHY HOUDART"),
      new models.OneText(
        "CATHY HOUDART",
        new models.Picture("./assets/pic/svg/github.svg", " GitHub")
      ),
    ],
    "https://github.com/MTLantoine"
  );
}
