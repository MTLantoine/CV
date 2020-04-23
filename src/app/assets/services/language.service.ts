import * as models from "../models";

export class LanguageService {
  language = new models.Competence("Langues", [
    new models.OneCompetence("Français (Langue maternelle)", 95),
    new models.OneCompetence("Anglais (Niveau B2)", 70),
  ]);
}
