import { createElement } from '../shared/utils';

export default class LoadMore {
  private element: HTMLElement | undefined;

  constructor() {
    this.element = undefined;
  }

  getElement(): HTMLElement {
    if (!this.element) {
      this.element = createElement(this.getTemplate()) as HTMLElement;
    }

    return this.element;
  }

  private getTemplate(): string {
    return `<button class="load-more" type="button">load more</button>`;
  }
}
