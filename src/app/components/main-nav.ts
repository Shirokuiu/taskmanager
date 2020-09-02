import { createElement } from '../shared/utils';

export default class MainNav {
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
    return `<section class="control__btn-wrap">
          <input
            type="radio"
            name="control"
            id="control__new-task"
            class="control__input visually-hidden"
          />
          <label for="control__new-task" class="control__label control__label--new-task"
            >+ ADD NEW TASK</label
          >
          <input
            type="radio"
            name="control"
            id="control__task"
            class="control__input visually-hidden"
            checked
          />
          <label for="control__task" class="control__label">TASKS</label>
          <input
            type="radio"
            name="control"
            id="control__statistic"
            class="control__input visually-hidden"
          />
          <label for="control__statistic" class="control__label"
            >STATISTICS</label
          >
        </section>`.trim();
  }
}
