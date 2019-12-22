import {formatDate} from '../utils.js';
import {MONTHS} from '../const.js';

import {createEventListItemTemplate} from '../components/card-list.js';

const createDayListMarkup = (date, events, uniqueDates) => {
  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${uniqueDates.indexOf(date) + 1}</span>
        <time class="day__date" datetime="${formatDate(new Date(date))}">${MONTHS[new Date(date).getMonth()]} ${new Date(date).getDate()}</time>
      </div>
      <ul class="trip-events__list">
      ${events.slice(1).filter((event) => event.startDate.getDate() === new Date(date).getDate()).map((event) => createEventListItemTemplate(event)).join(`\n`)}
      </ul>
    </li>`
  );
};

export const createDayListTemplate = (events) => {
  const startDates = events.slice(1).map((event) => event.startDate.toDateString());
  const uniqueDates = Array.from(new Set(startDates)).sort((a, b) => {
    return new Date(a) - new Date(b);
  });
  const days = uniqueDates.map((date) => createDayListMarkup(date, events, uniqueDates)).join(`\n`);
  return (
    `${days}`
  );
};
