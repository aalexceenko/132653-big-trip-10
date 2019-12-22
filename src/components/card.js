// import {formatTime, formatDateForDatetime} from '../utils.js';

// const createOffersMarkup = (offers) => {
//   return offers
//     .map(({name, price}) => {
//       return (
//         `<li class="event__offer">
//           <span class="event__offer-title">${name}</span>
//           &plus;
//           &euro;&nbsp;<span class="event__offer-price">${price}</span>
//         </li>`
//       );
//     })
//     .join(`\n`);
// };

// export const createCardTemplate = (event) => {
//   const {type, city, startDate, endDate, price, offers} = event;
//   const offers = createOffersMarkup(offers);

//   // const eventDuration = () => {
//   //   let hours = endDate.getHours() - startDate.getHours();
//   //   hours = (hours > 0) ? hours : hours + 24;
//   //   let minutes = endDate.getMinutes() - startDate.getMinutes();
//   //   hours = (minutes > 0) ? hours : hours - 1;
//   //   minutes = (minutes > 0) ? minutes : minutes + 60;
//   //   return `${hours}H ${minutes}M`;
//   // };

//   return (
//     `<li class="trip-events__item">
//       <div class="event">
//         <div class="event__type">
//           <img class="event__type-icon" width="42" height="42" src="${type.icon}" alt="Event type icon">
//         </div>
//         <h3 class="event__title">${type} in ${city}</h3>
//         <div class="event__schedule">
//           <p class="event__time">
//             <time class="event__start-time" datetime="${formatDateForDatetime(startDate)}">${formatTime(startDate)}</time>
//             &mdash;
//             <time class="event__end-time" datetime="${formatDateForDatetime(endDate)}">${formatTime(endDate)}</time>
//           </p>
//           <p class="event__duration">${eventDuration()}</p>
//         </div>
//         <p class="event__price">
//           &euro;&nbsp;<span class="event__price-value">${price}</span>
//         </p>
//         <h4 class="visually-hidden">Offers:</h4>
//         <ul class="event__selected-offers">
//           ${offers}
//         </ul>
//         <button class="event__rollup-btn" type="button">
//           <span class="visually-hidden">Open event</span>
//         </button>
//       </div>
//     </li>`
//   );
// };
