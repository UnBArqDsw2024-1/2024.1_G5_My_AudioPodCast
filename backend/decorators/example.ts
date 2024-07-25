import { BaseNotifier } from "./BaseNotifier";
import {
  EmailNotifier,
  ApplePodcastNotifier,
  SpotifyNotifier,
  CastBoxNotifier,
  PocketCastsNotifier,
} from "./notifiers/index";

function serverCode(notifier: BaseNotifier) {
  // No exemplo, suponhamos que este codigo rodasse uma hora no servidor pra mandar as notificacoes

  // IMPLEMENTACAO
  // Vamos mandar uma notificação ao usuario sobre o PodPah...
  notifier.send("Novo Podcast do PodPah: Episodio 256 -> Casimiro");

  // Continua a logica do servidor...
}

// No servidor puxamos as preferencias de notificacoes do usuario
// Assim saberemos pra qual plataforma ele quer ser notificado
const userPreferences = {
  notifications: {
    email: true,
    spotify: true,
    applePodcast: false,
    youtube: true,
    castBox: false,
    pocketCasts: false,
    // e mais outras preferências
  },
};

let notifications: BaseNotifier = new EmailNotifier();

// notifications ficara com todas as notificacoes que o server precisa mandar
// Com base nas preferencias vamos adicionando os decorators
if (userPreferences.notifications.applePodcast) {
  notifications = new ApplePodcastNotifier(notifications);
}

if (userPreferences.notifications.spotify) {
  notifications = new SpotifyNotifier(notifications);
}

if (userPreferences.notifications.youtube) {
  notifications = new SpotifyNotifier(notifications);
}

if (userPreferences.notifications.castBox) {
  notifications = new CastBoxNotifier(notifications);
}

if (userPreferences.notifications.pocketCasts) {
  notifications = new PocketCastsNotifier(notifications);
}
// E assim por diante de quantos plataformas o usuario desejar ser notificado...

// mandamos para o server de fato executar nosso serviço de noticação
serverCode(notifications);
