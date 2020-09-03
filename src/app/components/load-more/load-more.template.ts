import { Component } from '../../core';

export class LoadMoreTemplate extends Component {
  getTemplate(): string {
    return `<button class="load-more" type="button">load more</button>`;
  }
}
