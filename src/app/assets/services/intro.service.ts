import * as models from "../models";

export class IntroService {
  intro = new models.Text("Introduction", [
    new models.OneText(
      "Passionné d'informatique et diplômé d'un Master Informatique, j’aime particulièrement créer de nouveaux programmes et surmonter des difficultés."
    ),
    new models.OneText(
      "Fort d’une expérience dans une entreprise spécialisée dans le développement de site internet, j’ai pu réaliser des projets utilisant différentes technologies."
    ),
    new models.OneText(
      "Motivé, rigoureux et surtout passionné, je cherche toujours à me dépasser."
    ),
    new models.OneText(
      "J'aime quand le travail est soigneusement réalisé et quand celui-ci est à la pointe de la technologie."
    ),
    new models.OneText(
      "De plus, mes différentes expériences professionnelles m’ont permis d’acquérir le sens des responsabilités et l’esprit d’équipe."
    ),
    new models.OneText(
      "Exercer dans un secteur qui me permet d'exprimer ma motivation et de donner satisfaction dans le travail que je vais avoir la chance d'effectuer est primordial pour moi."
    ),
    new models.OneText(
      "Grâce à ma polyvalence et à mes connaissances, je pense pouvoir être un élément complémentaire important au sein de votre équipe."
    ),
  ]);
}
