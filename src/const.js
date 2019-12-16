const EVENTS_COUNT = 3;

const EVENT_TYPES = {
  transfers: [
    `bus`,
    `drive`,
    `flight`,
    `ship`,
    `taxi`,
    `train`,
    `transport`
  ],
  activities: [
    `check-in`,
    `restaurant`,
    `sightseeing`
  ]
};

const CITIES = [
  `Amsterdam`,
  `Rotterdam`,
  `Berlin`,
  `Vienna`,
  `Prague`,
  `Paris`
];

const OFFERS = [
  {
    type: `luggage`,
    title: `Add luggage`,
    price: 30
  },
  {
    type: `comfort`,
    title: `Switch to comfort class`,
    price: 100
  },
  {
    type: `meal`,
    title: `Add meal`,
    price: 15
  },
  {
    type: `seats`,
    title: `Choose seats`,
    price: 5
  },
  {
    type: `train`,
    title: `Travel by train`,
    price: 40
  }
];

const FILTERS = [
  `everything`,
  `future`,
  `past`,
];

const MENU_ITEMS = [
  `Table`,
  `Stats`
];

const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`
];


export {EVENT_TYPES, CITIES, OFFERS, FILTERS, MENU_ITEMS, DESCRIPTIONS, EVENTS_COUNT};

