import * as models from "../models";

export class AboutMeService {
  aboutMe = new models.Text("à propos de moi", [
    new models.OneText(
      "Vous l'aurez compris, j'aime particulièrement tout ce qui a un lien avec un écran."
    ),
    new models.OneText(
      "Jeux vidéo, programmation et quelques fois télévision."
    ),
    new models.OneText(
      'Je suis très joueur, je joue la plupart du temps à des jeux stratégiques type "League of Legends".'
    ),
    new models.OneText(
      "Un jeu où la stratégie d'équipe est de rigueur, un jeu où le travail d'équipe est primordial."
    ),
    new models.OneText(
      "Je suis un geek sportif, l'idée de rester assis toute la journée sur un fauteuil me dérange,"
    ),
    new models.OneText(
      "la natation, le vélo ou encore la musculation m'aident à changer d'air tout en gardant la ligne."
    ),
    new models.OneText(
      "Je suis très curieux, j'aime voyager, découvrir, apprendre ! Voir une activité qui me plaît me donne vite envie de la maîtriser."
    ),
    new models.OneText(
      "Je n'ai qu'une attente dans ma vie professionnelle : en découvrir toujours plus."
    ),
  ]);
}
