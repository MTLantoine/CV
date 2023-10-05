import * as models from "../models";

export class UserService {
  user = new models.User(
    "Antoine",
    "Mortelier",
    25,
    new models.Picture("./assets/pic/profile.png", "profile picture"),
    new models.Picture("./assets/pic/sunglasses.png", "easter egg")
  );
}
