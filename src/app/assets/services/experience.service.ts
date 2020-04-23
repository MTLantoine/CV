import * as models from "../models";

export class ExperienceService {
  experience = new models.Experience("CATHY HOUDART", [
    new models.OneExperience(
      new models.Date("2019", "Avril - Août"),
      "CATHY HOUDART",
      "CATHY HOUDART",
      "CATHY HOUDART"
    ),
    new models.OneExperience(
      new models.Date("2018", "Juillet - Août"),
      "SDIS 2B (Service Départemental d'Incendie et de Secours)",
      "Surveillance et sauvetage en zone de baignade et préventions sur la plage comme dans l'eau",
      "CATHY HOUDART"
    ),
    new models.OneExperience(
      new models.Date("2017", "Juillet - Août"),
      "CATHY HOUDART",
      "CATHY HOUDART",
      "CATHY HOUDART"
    ),
  ]);
}
