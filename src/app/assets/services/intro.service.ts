import * as models from "../models";

export class IntroService {
  intro = new models.Text("Introduction", [
    new models.OneText(
      "Passionné d'informatique et titulaire d’un Master en Informatique, je prends un plaisir particulier à concevoir de nouveaux programmes et à relever des défis techniques"
    ),
    new models.OneText(
      "Fort d’une expérience au sein d’entreprises spécialisées dans le développement de sites internet et d’applications destinées aux secteurs de la banque et de l’assurance, j’ai pu mener à bien des projets utilisant une variété de technologies."
    ),
    new models.OneText(
      "Motivé, rigoureux et passionné, je cherche constamment à me dépasser pour atteindre l’excellence."
    ),
    new models.OneText(
      "J’accorde une grande importance à la qualité du travail, qu’il soit réalisé avec soin et en intégrant les dernières innovations technologiques."
    ),
    new models.OneText(
      "Par ailleurs, mes diverses expériences professionnelles m’ont permis d’acquérir un sens aigu des responsabilités et un solide esprit d’équipe."
    ),
    new models.OneText(
      "Évoluer dans un secteur qui me permet d’exprimer pleinement ma motivation et de contribuer à des projets satisfaisants est pour moi une priorité."
    ),
    new models.OneText(
      "Grâce à ma polyvalence et à mes connaissances techniques, je suis convaincu de pouvoir être un atout précieux pour votre équipe."
    ),
  ]);
}
