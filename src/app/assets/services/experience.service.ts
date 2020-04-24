import * as models from "../models";

export class ExperienceService {
  experience = new models.Experience("Expériences", [
    new models.OneExperience(
      new models.Date("2019", "Avril - Août"),
      "Yoozly (Stage)",
      "Conception de sites Web sous AngularJS",
      "Développeur Front-End"
    ),
    new models.OneExperience(
      new models.Date("2018", "Juillet - Août"),
      "SDIS 2B (Service Départemental d'Incendie et de Secours)",
      "Surveillance et sauvetage en zone de baignade et préventions sur la plage comme dans l'eau",
      "Nageur sauveteur qualifié - Sapeur pompier volontaire"
    ),
    new models.OneExperience(
      new models.Date("2017", "Juillet - Août"),
      "SNSM (Société Nationale de Sauvetage en Mer)",
      "Surveillance et sauvetage en zone de baignade et préventions sur la plage comme dans l'eau",
      "Nageur sauveteur qualifié"
    ),
    new models.OneExperience(
      new models.Date("2018 - 2020"),
      "Deliveroo",
      "Livraison de repas à domicile",
      "Coursier à vélo"
    ),
  ]);
}
