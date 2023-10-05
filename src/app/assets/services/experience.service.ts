import * as models from "../models";

export class ExperienceService {
  experience = new models.Experience("Expériences", [
    new models.OneExperience(
      new models.Date("Octobre 2023", "Septembre 2020 -"),
      "Développeur Front-End",
      "Conception de sites Web sous Angular, VueJS et Magento 2",
      "Insitaction"
    ),
    new models.OneExperience(
      new models.Date("2019", "Avril - Août"),
      "Développeur Front-End",
      "Conception de sites Web sous Angular",
      "Yoozly (Stage)"
    ),
    new models.OneExperience(
      new models.Date("2020", "Mai"),
      "Livreur",
      "Livraison de courses à domicile",
      "CORA"
    ),
    new models.OneExperience(
      new models.Date("2020", "Juillet - Août"),
      "Nageur sauveteur qualifié - Chef de poste Adjoint",
      "Surveillance et sauvetage en zone de baignade et préventions sur la plage comme dans l'eau",
      "FFSS (Fédération Française de Sauvetage et de Secourisme)"
    ),
    new models.OneExperience(
      new models.Date("2018", "Juillet - Août"),
      "Nageur sauveteur qualifié - Sapeur pompier volontaire",
      "Surveillance et sauvetage en zone de baignade et préventions sur la plage comme dans l'eau",
      "SDIS 2B (Service Départemental d'Incendie et de Secours)"
    ),
    new models.OneExperience(
      new models.Date("2017", "Juillet - Août"),
      "Nageur sauveteur qualifié",
      "Surveillance et sauvetage en zone de baignade et préventions sur la plage comme dans l'eau",
      "SNSM (Société Nationale de Sauvetage en Mer)"
    ),
    new models.OneExperience(
      new models.Date("2018 - 2020"),
      "Coursier à vélo",
      "Livraison de repas à domicile",
      "Deliveroo"
    ),
  ]);
}
