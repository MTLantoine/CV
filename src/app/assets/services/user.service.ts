import * as models from "../models";

export class UserService {
  user = new models.User(
    "CATHY HOUDART",
    "CATHY HOUDART",
    22,
    new models.Picture("./assets/pic/profile.png", "profile picture")
  );
}
