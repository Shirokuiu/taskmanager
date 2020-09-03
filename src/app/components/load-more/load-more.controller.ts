import { DOM } from '../../core';
import { LoadMoreTemplate } from './load-more.template';

export class LoadMoreController {
  private readonly loadMoreTemplate = new LoadMoreTemplate();

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    DOM.render(this.$container, this.loadMoreTemplate.getElement());
  }
}
