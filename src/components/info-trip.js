import {MONTHS} from '../const.js';

const getTripCost = (event) => {
  const {price, offers} = event;
  const tripCost = offers.map((option) => option.price).reduce((sum, current) => {
    return sum + current;
  }, price);
  return tripCost;
};

const createInfoTripTemplate = (events) => {

  const totalCost = events.map((event) => getTripCost(event)).reduce((sum, current) => {
    return sum + current;
  });

  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title">${events[0].city} &mdash; ... &mdash; ${events[events.length - 1].city}</h1>
      <p class="trip-info__dates">${MONTHS[events[0].startDate.getMonth()]} ${events[0].startDate.getDate()}&nbsp;&mdash;&nbsp;${events[events.length - 1].endDate.getDate()}</p>
    </div>
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
    </p>`
  );
};

export {createInfoTripTemplate};
