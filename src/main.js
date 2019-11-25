import {createSiteMenuTemplate} from './components/site-menu.js';
import {createCardListTemplate} from './components/card-list.js';
import {createFilterTemplate} from './components/filter.js';
import {createFormTemplate} from './components/form.js';
import {createInfoTripTemplate} from './components/info-trip.js';
import {createListConteinerTemplate} from './components/list-container';

const CARD_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const siteTripInfoElement = document.querySelector(`.trip-info`);

render(siteTripInfoElement, createInfoTripTemplate(), `afterbegin`);

const siteTripConrolsElement = document.querySelector(`.trip-controls`);
const siteTripConrolsHederElement = siteTripConrolsElement.querySelector(`h2`);

render(siteTripConrolsHederElement, createSiteMenuTemplate(), `afterend`);
render(siteTripConrolsElement, createFilterTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.page-main`);
const siteTripEventsElement = siteMainElement.querySelector(`.trip-events`);


render(siteTripEventsElement, createFormTemplate(), `beforeend`);
render(siteTripEventsElement, createListConteinerTemplate(), `beforeend`);

const cardListElement = siteTripEventsElement.querySelector(`.trip-events__list`);

new Array(CARD_COUNT)
    .fill(``)
    .forEach(
        () => render(cardListElement, createCardListTemplate(), `beforeend`)
    );

