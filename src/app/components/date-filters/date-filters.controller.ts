import { DateFiltersTemplate } from './date-filters.template';
import { DOM } from '../../core';

export class DateFiltersController {
  private readonly dateFiltersTemplate: DateFiltersTemplate;

  constructor(private readonly $container: HTMLElement) {
    this.dateFiltersTemplate = new DateFiltersTemplate();
  }

  init(): void {
    const $dateFiltersTemplate: HTMLElement = this.dateFiltersTemplate.getElement();

    DOM.render(this.$container, $dateFiltersTemplate);
  }
}
