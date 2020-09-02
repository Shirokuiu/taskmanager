import { MainNavTemplate } from './main-nav.template';
import { DOM } from '../../core';

export class MainNavController {
  private readonly mainNavTemplate: HTMLElement;

  constructor(private readonly container: HTMLElement) {
    this.mainNavTemplate = new MainNavTemplate().getElement();
  }

  init(): void {
    DOM.render(this.container, this.mainNavTemplate);
  }
}
