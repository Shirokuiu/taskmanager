import { DateFiltersTemplate } from './date-filters.template';
import { DOM } from '../../core';

export class DateFiltersController {
  private dateFiltersTemplate = new DateFiltersTemplate();

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    DOM.render(this.$container, this.dateFiltersTemplate.getElement());
  }
}
