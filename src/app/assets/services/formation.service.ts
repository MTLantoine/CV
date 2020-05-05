import * as models from "../models";

export class FormationService {
  formation = new models.Experience("Formations & Compétences", [
    new models.OneExperience(
      new models.Date("2016 - 2020"),
      "Université de Lille",
      "Licence Informatique"
    ),
    new models.OneExperience(
      new models.Date("2017"),
      "Brevet National de Sécurité et de Sauvetage Aquatique (BNSSA)",
      "Sauveteur qualifié aux interventions sur une personne en difficulté dans l'eau"
    ),
    new models.OneExperience(
      new models.Date("2016"),
      "Premiers Secours en Équipe 1 (PSE1)",
      "Secourisme qualifié à l'aide des personnes en danger et premiers secours"
    ),
    new models.OneExperience(
      new models.Date("2016"),
      "Premiers Secours en Équipe 2 (PSE2)",
      "Secourisme qualifié à l'aide des personnes en danger et premiers secours"
    ),
  ]);
}
