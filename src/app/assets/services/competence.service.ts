import * as models from "../models";

export class CompetenceService {
  competence = new models.Competence("CATHY HOUDART", [
    new models.OneCompetence("CATHY HOUDART", 75),
    new models.OneCompetence("CATHY HOUDART", 60),
    new models.OneCompetence("CATHY HOUDART", 60),
    new models.OneCompetence("CATHY HOUDART", 80),
    new models.OneCompetence("CATHY HOUDART", 80),
    new models.OneCompetence("CATHY HOUDART", 85),
    new models.OneCompetence("CATHY HOUDART", 30),
    new models.OneCompetence("CATHY HOUDART", 20),
  ]);
}
