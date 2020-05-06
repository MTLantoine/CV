import * as models from "../models";

export class AboutMeService {
  aboutMe = new models.Text("à propos de moi", [
    new models.OneText(
      "SECTION 'A PROPOS DE MOI' parler de ce qui me plait, mes loisirs, moi! SECTION"
    ),
    new models.OneText(
      "SECTION 'A PROPOS DE MOI' parler de ce qui me plait, mes loisirs, moi! SECTION"
    ),
    new models.OneText(
      "SECTION 'A PROPOS DE MOI' parler de ce qui me plait, mes loisirs, moi! SECTION"
    ),
    new models.OneText(
      "SECTION 'A PROPOS DE MOI' parler de ce qui me plait, mes loisirs, moi! SECTION"
    ),
    new models.OneText(
      "SECTION 'A PROPOS DE MOI' parler de ce qui me plait, mes loisirs, moi! SECTION"
    ),
  ]);
}
