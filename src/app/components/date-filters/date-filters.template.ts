import { Component } from '../../core';

export class DateFiltersTemplate extends Component {
  getTemplate(): string {
    return `<div class="board__filter-list">
          <a href="#" class="board__filter">SORT BY DEFAULT</a>
          <a href="#" class="board__filter">SORT BY DATE up</a>
          <a href="#" class="board__filter">SORT BY DATE down</a>
        </div>`.trim();
  }
}
