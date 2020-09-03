import { MainSearchTemplate } from './main-search.template';
import { DOM } from '../../core';

export class MainSearchController {
  private readonly mainSearchTemplate = new MainSearchTemplate();

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    DOM.render(this.$container, this.mainSearchTemplate.getElement());
  }
}
