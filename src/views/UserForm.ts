export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): {[key: string]: () => void} {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
    };
  }
  onHeaderHover(): void {
    console.log('H1 was hovered over');
  }
  onButtonClick(): void {
    console.log('Hi there');
  }

  template(): string {
    return /*javascript*/ `
      <div>
        <h1>User form</h1>
        <input />
        <button>Click Me</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment) {
    const eventsMap = this.eventsMap();

    for (let eventsKey in eventsMap) {
      const [eventName, selector] = eventsKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventsKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
