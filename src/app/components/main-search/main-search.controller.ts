import { MainSearchTemplate } from './main-search.template';
import { DOM } from '../../core';

export class MainSearchController {
  private readonly mainSearchTemplate: MainSearchTemplate;

  constructor(private readonly $container: HTMLElement) {
    this.mainSearchTemplate = new MainSearchTemplate();
  }

  init(): void {
    const $mainSearchTemplate: HTMLElement = this.mainSearchTemplate.getElement();

    DOM.render(this.$container, $mainSearchTemplate);
  }
}
