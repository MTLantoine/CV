import * as models from "../models";

export class FormationService {
  formation = new models.Experience("Formations", [
    new models.OneExperience(
      new models.Date("2016 - 2017"),
      "Université de Lille 1",
      "Licence 1 de SESI (Sciences Exactes et Sciences pour l'Ingénieur)."
    ),
    new models.OneExperience(
      new models.Date("2017"),
      "Brevet National de Sécurité et de Sauvetage Aquatique (BNSSA)",
      "Sauveteur qualifié aux interventions sur une personne en difficulté dans l'eau."
    ),
    new models.OneExperience(
      new models.Date("2017 - 2020"),
      "Université de Lille",
      "Licence 2 et 3 d'informatique."
    ),
    new models.OneExperience(
      new models.Date("2016"),
      "Premiers Secours en Équipe 1 et 2 (PSE1 et PSE2)",
      "Secourisme qualifié à l'aide des personnes en danger et premiers secours."
    ),
    new models.OneExperience(
      new models.Date("2016"),
      "Lycée Sainte Claire - Lille",
      "Bac Scientifique."
    ),
  ]);
}
