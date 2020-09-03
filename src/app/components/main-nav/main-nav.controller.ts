import { MainNavTemplate } from './main-nav.template';
import { DOM } from '../../core';

export class MainNavController {
  private readonly mainNavTemplate: MainNavTemplate;

  constructor(private readonly $container: HTMLElement) {
    this.mainNavTemplate = new MainNavTemplate();
  }

  init(): void {
    const $mainNavTemplate: HTMLElement = this.mainNavTemplate.getElement();

    DOM.render(this.$container, $mainNavTemplate);
  }
}
