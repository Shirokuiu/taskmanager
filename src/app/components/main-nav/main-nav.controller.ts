import { MainNavTemplate } from './main-nav.template';
import { DOM } from '../../core';

export class MainNavController {
  private readonly mainNavTemplate = new MainNavTemplate();

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    DOM.render(this.$container, this.mainNavTemplate.getElement());
  }
}
