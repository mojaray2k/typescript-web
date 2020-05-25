import {User} from '../models/User';

export abstract class View {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  abstract eventsMap(): {[key: string]: () => void};

  bindEvents(fragment: DocumentFragment) {
    const eventsMap = this.eventsMap();

    for (let eventsKey in eventsMap) {
      const [eventName, selector] = eventsKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventsKey]);
      });
    }
  }

  abstract template(): string;

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
