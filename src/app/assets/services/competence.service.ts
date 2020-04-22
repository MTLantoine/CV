import * as models from "../models";

export class CompetenceService {
  competence = new models.Competence("Compétences", [
    new models.OneCompetence("AngularJS", 75),
    new models.OneCompetence("TypeScript", 60),
    new models.OneCompetence("JavaScript", 60),
    new models.OneCompetence("Java", 80),
    new models.OneCompetence("HTML", 80),
    new models.OneCompetence("CSS", 85),
    new models.OneCompetence("SQL", 30),
    new models.OneCompetence("PHP", 20),
  ]);
}
