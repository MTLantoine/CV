import * as models from "../models";

export class CompetenceService {
  competence = new models.Competence("Technologies", [
    new models.OneCompetence("Angular", 85),
    new models.OneCompetence("VueJS", 75),
    new models.OneCompetence("HTML", 95),
    new models.OneCompetence("CSS", 95),
    new models.OneCompetence("TypeScript", 80),
    new models.OneCompetence("JavaScript", 80),
    new models.OneCompetence("Java", 60),
    new models.OneCompetence("SQL", 30),
    new models.OneCompetence("PHP", 25),
  ]);
}
