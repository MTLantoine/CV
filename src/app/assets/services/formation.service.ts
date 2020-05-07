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
      new models.Date("2019"),
      "AngularJS",
      "Framework JavaScript qui étend le HTML pour le rendre dynamique, et permet de développer ses propres balises et attributs HTML"
    ),
    new models.OneExperience(
      new models.Date("2017"),
      "Git",
      "Logiciel de gestion de versions décentralisé"
    ),
    new models.OneExperience(
      new models.Date("2016"),
      "Premiers Secours en Équipe 1 et 2 (PSE1 et PSE2)",
      "Secouriste qualifié pour les premiers secours en équipe"
    ),
  ]);
}
