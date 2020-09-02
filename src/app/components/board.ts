import { createElement } from '../shared/utils';

export default class Board {
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
    return `<section class="board container">
        <div class="board__filter-list">
          <a href="#" class="board__filter">SORT BY DEFAULT</a>
          <a href="#" class="board__filter">SORT BY DATE up</a>
          <a href="#" class="board__filter">SORT BY DATE down</a>
        </div>

        <div class="board__tasks">
          <!-- TaskEdit !-->
          <!-- Task !-->
        </div>

        <!-- LoadMore !-->
      </section>`.trim();
  }
}
