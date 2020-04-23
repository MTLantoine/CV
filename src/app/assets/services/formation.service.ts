import * as models from "../models";

export class FormationService {
  formation = new models.Experience("CATHY HOUDART", [
    new models.OneExperience(
      new models.Date("2016 - 2017"),
      "CATHY HOUDART",
      "CATHY HOUDART"
    ),
    new models.OneExperience(
      new models.Date("2017"),
      "CATHY HOUDART",
      "CATHY HOUDART"
    ),
    new models.OneExperience(
      new models.Date("2017 - 2020"),
      "CATHY HOUDART",
      "CATHY HOUDART"
    ),
    new models.OneExperience(
      new models.Date("2016"),
      "CATHY HOUDART",
      "CATHY HOUDART"
    ),
    new models.OneExperience(
      new models.Date("2016"),
      "CATHY HOUDART",
      "CATHY HOUDART"
    ),
  ]);
}
