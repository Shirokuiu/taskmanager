import { DOM } from '../../core';
import { LoadMoreTemplate } from './load-more.template';

export class LoadMoreController {
  private readonly loadMoreTemplate: LoadMoreTemplate;

  constructor(private readonly $container: HTMLElement) {
    this.loadMoreTemplate = new LoadMoreTemplate();
  }

  init(): void {
    const $loadMoreTemplate: HTMLElement = this.loadMoreTemplate.getElement();

    DOM.render(this.$container, $loadMoreTemplate);
  }
}
