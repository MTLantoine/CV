import * as models from "../models";

export class IntroService {
  intro = new models.Text("Introduction", [
    new models.OneText(
      "Diplômé d'une licence Informatique, je suis activement à la recherche d'une alternance pour les deux années à suivre (2020 - 2022)."
    ),
    new models.OneText(
      "Passionné d'informatique, j’aime particulièrement créer de nouveaux programmes et surmonter des difficultés."
    ),
    new models.OneText(
      "Fort d’une expérience dans une entreprise spécialisée dans le développement de site internet, j’ai pu réaliser des projets utilisant différentes technologies."
    ),
    new models.OneText(
      "Cet apprentissage a consolidé ma fascination pour le développement de sites web."
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
      "C'est très important pour moi de postuler dans un secteur qui va me permettre d'exprimer ma motivation et de donner satisfaction dans le travail que je vais avoir la chance d'effectuer."
    ),
    new models.OneText(
      "Grâce à ma polyvalence et à mes connaissances, je pense pouvoir être un élément complémentaire important au sein de votre équipe."
    ),
  ]);
}
