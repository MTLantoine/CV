import * as models from "../models";

export class IntroService {
  intro = new models.Text("Introduction", [
    new models.OneText(
      "Diplômé d'une licence Informatique, je suis activement à la recherche d'une alternance pour les deux années à suivre (2020 - 2022)."
    ),
    new models.OneText(
      "Je suis passionné d'informatique depuis mes années lycée, et compte bien faire de ma passion mon métier."
    ),
    new models.OneText(
      "J'ai forgé mon expérience en réalisant des projets qui m'ont tous fait mieux connaître  la technologie utilisée, mais j'ai aussi développé une fascination pour le développement de sites web lors de mon premier stage en entreprise."
    ),
    new models.OneText(
      "Motivé, dynamique, passionné, je suis toujours d'attaque pour trouver de nouvelles solutions à un problème."
    ),
    new models.OneText(
      "J'aime quand le travail est soigneusement réalisé, et quand le travail réalisé est à la pointe de la technologie."
    ),
    new models.OneText(
      "Je cherche toujours à aller plus loin, à avancer en équipe, de manière organisée."
    ),
    new models.OneText(
      "C'est très important pour moi de postuler dans un secteur qui va me permettre d'exprimer ma motivation et de donner satisfaction dans le travail que je vais avoir la chance d'effectuer."
    ),
    new models.OneText(
      "Je suis persuadé que mes diverses compétences peuvent vous intéresser, je peux ensuite vous certifier que c'est avec beaucoup de dynamisme et de passion que je vais occuper le poste que vous allez me confier."
    ),
  ]);
}
