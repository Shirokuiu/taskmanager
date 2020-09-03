import { Component } from '../../core';

export class BoardTemplate extends Component {
  getTemplate(): string {
    return `<section class="board container">
        <div class="board__filters-wrap">
          <!-- DateFiltersController !-->
        </div>

        <div class="board__tasks">
          <!-- TaskEdit !-->
          <!-- Task !-->
        </div>

        <!-- LoadMore !-->
      </section>`.trim();
  }
}
