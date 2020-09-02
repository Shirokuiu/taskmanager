import { MainSearchTemplate } from './main-search.template';
import { DOM } from '../../core';

export class MainSearchController {
  private readonly mainSearchTemplate: HTMLElement;

  constructor(private readonly $container: HTMLElement) {
    this.mainSearchTemplate = new MainSearchTemplate().getElement();
  }

  init(): void {
    DOM.render(this.$container, this.mainSearchTemplate);
  }
}
