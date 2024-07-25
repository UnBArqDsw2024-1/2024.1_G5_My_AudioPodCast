import { BaseNotifier } from "../BaseNotifier";

// Decorator Base, já que o usuario sempre recebe por email
export class EmailNotifier implements BaseNotifier {
  public send(message: string) {
    console.log(`Enviando mensagem: ${message} para Email do usuario`);
  }
}

// Implementaçãoo do decorator
export class NotifierDecorator implements BaseNotifier {
  protected notifier: BaseNotifier;

  constructor(notifier: BaseNotifier) {
    this.notifier = notifier;
  }

  public send(message: string) {
    this.notifier.send(message);
  }
}

export class SpotifyNotifier extends NotifierDecorator {
  public send(message: string) {
    console.log(`Enviando mensagem: ${message} para Apple Podcast do usuario`);
    super.send(message);
  }
}

export class ApplePodcastNotifier extends NotifierDecorator {
  public send(message: string) {
    console.log(`Enviando mensagem: ${message} para Apple Podcast do usuario`);
    super.send(message);
  }
}

export class CastBoxNotifier extends NotifierDecorator {
  public send(message: string) {
    console.log(`Enviando mensagem: ${message} para CastBox do usuario`);
    super.send(message);
  }
}

export class PocketCastsNotifier extends NotifierDecorator {
  public send(message: string) {
    console.log(`Enviando mensagem: ${message} para Pocket Casts do usuario`);
    super.send(message);
  }
}
