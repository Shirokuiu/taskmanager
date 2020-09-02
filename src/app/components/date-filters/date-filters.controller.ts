import { DateFiltersTemplate } from './date-filters.template';
import { DOM } from '../../core';

export class DateFiltersController {
  private readonly dateFiltersTemplate: HTMLElement;

  constructor(private readonly container: HTMLElement) {
    this.dateFiltersTemplate = new DateFiltersTemplate().getElement();
  }

  init(): void {
    DOM.render(this.container, this.dateFiltersTemplate);
  }
}
