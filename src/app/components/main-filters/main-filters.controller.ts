import { MainFiltersTemplate } from './main-filters.template';
import { DOM } from '../../core';

export class MainFiltersController {
  private readonly mainFiltersTemplate = new MainFiltersTemplate();

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    DOM.render(this.$container, this.mainFiltersTemplate.getElement());
  }
}
