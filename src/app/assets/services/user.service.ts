import * as models from "../models";

export class UserService {
  user = new models.User(
    "Antoine",
    "Mortelier",
    22,
    new models.Picture("./assets/pic/profile.png", "profile picture")
  );
}
