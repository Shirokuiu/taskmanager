import { format } from 'date-fns';
import { RepeatingDaysModel, TaskModel } from '../shared/models';
import { createElement } from '../shared/utils';

export default class Task {
  private element: HTMLElement | undefined;
  private color: string;
  private repeatingDays: RepeatingDaysModel;
  private isArchive: boolean;
  private isFavorite: boolean;
  private description: string;
  private dueDate: number;
  private tags: string[];

  constructor({
    color,
    repeatingDays,
    isArchive,
    isFavorite,
    description,
    dueDate,
    tags,
  }: TaskModel) {
    this.element = undefined;
    this.color = color;
    this.repeatingDays = repeatingDays;
    this.isArchive = isArchive;
    this.isFavorite = isFavorite;
    this.description = description;
    this.dueDate = dueDate;
    this.tags = tags;
  }

  getElement(): HTMLElement {
    if (!this.element) {
      this.element = createElement(this.getTemplate()) as HTMLElement;
    }

    return this.element;
  }

  private getTemplate(): string {
    return `<article class="card card--${this.color} ${
      Object.values(this.repeatingDays).some((day: boolean) => day) ? 'card--repeat' : ''
    }">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                  <button type="button" class="card__btn card__btn--archive ${
                    !this.isArchive ? 'card__btn--disabled' : ''
                  }">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites ${
                      !this.isFavorite ? 'card__btn--disabled' : ''
                    }"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text">${this.description}</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${format(
                            this.dueDate,
                            'dd MMMM'
                          )}</span>
                          <span class="card__time">${format(
                            this.dueDate,
                            'HH:mm a'
                          )}</span>
                        </p>
                      </div>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        ${this.tags
                          .map(
                            (tag: string) => `
                            <span class="card__hashtag-inner">
                          <span class="card__hashtag-name">
                            #${tag}
                          </span>
                            </span>`
                          )
                          .join('')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>`.trim();
  }
}
