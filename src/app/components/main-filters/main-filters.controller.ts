import { MainFiltersTemplate } from './main-filters.template';
import { DOM } from '../../core';

export class MainFiltersController {
  private readonly mainFiltersTemplate: MainFiltersTemplate;

  constructor(private readonly $container: HTMLElement) {
    this.mainFiltersTemplate = new MainFiltersTemplate();
  }

  init(): void {
    const $mainFiltersTemplate: HTMLElement = this.mainFiltersTemplate.getElement();

    DOM.render(this.$container, $mainFiltersTemplate);
  }
}
