import * as models from "../models";

export class LanguageService {
  language = new models.Competence("CATHY HOUDART", [
    new models.OneCompetence("CATHY HOUDART", 95),
    new models.OneCompetence("CATHY HOUDART", 70),
  ]);
}
