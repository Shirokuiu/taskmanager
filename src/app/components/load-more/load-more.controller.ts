import { DOM } from '../../core';
import { LoadMoreTemplate } from './load-more.template';

export class LoadMoreController {
  private readonly loadMoreTemplate: HTMLElement;

  constructor(private readonly $container: HTMLElement) {
    this.loadMoreTemplate = new LoadMoreTemplate().getElement();
  }

  init(): void {
    DOM.render(this.$container, this.loadMoreTemplate);
  }
}
