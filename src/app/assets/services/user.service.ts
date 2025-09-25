import * as models from "../models";

export class UserService {
  user = new models.User(
    "Antoine",
    "Mortelier",
    new Date(1997, 11, 26),
    new models.Picture("./assets/pic/profile.jpeg", "profile picture"),
    new models.Picture("./assets/pic/sunglasses.png", "easter egg")
  );
}
