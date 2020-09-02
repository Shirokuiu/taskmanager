import { MainFiltersTemplate } from './main-filters.template';
import { DOM } from '../../core';

export class MainFiltersController {
  private readonly mainFiltersTemplate: HTMLElement;

  constructor(private readonly container: HTMLElement) {
    this.mainFiltersTemplate = new MainFiltersTemplate().getElement();
  }

  init(): void {
    DOM.render(this.container, this.mainFiltersTemplate);
  }
}
