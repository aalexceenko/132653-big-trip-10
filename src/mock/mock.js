import {EVENT_TYPES, CITIES, OFFERS, DESCRIPTIONS, EVENTS_COUNT} from '../const.js';
import {getRandomIntegerNumber, generateRandomArrayItem, formatTime} from '../utils.js';

const generateDescriptions = (array) => {
  const arrayLength = getRandomIntegerNumber(0, array.length);

  return array.slice(0, arrayLength).join(` `);
};

const generatePhotos = () => {
  const count = getRandomIntegerNumber(1, 6);

  return [...Array(count)].map(() =>
    `http://picsum.photos/300/150?r=${Math.random()}`
  );
};

const generateOffers = (array) => {
  const restArray = array.slice();
  const countArray = getRandomIntegerNumber(1, restArray.length);
  const result = [];
  for (let i = 0; i < countArray; i++) {
    result.push(restArray.splice(getRandomIntegerNumber(0, restArray.length - 1), 1));
  }

  return result;
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 7);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;

};


const generateEvent = () => {
  const firstDate = Math.random() > 0.5 ? null : getRandomDate();
  const secondDate = Math.random() > 0.5 ? null : getRandomDate();


  return {
    type: generateRandomArrayItem([...EVENT_TYPES.transfers, ...EVENT_TYPES.activities]),
    city: generateRandomArrayItem(CITIES),
    startDate: Math.min(firstDate, secondDate),
    endDate: Math.max(firstDate, secondDate),
    offers: generateOffers(OFFERS),
    price: getRandomIntegerNumber(10, 200),
    description: generateDescriptions(DESCRIPTIONS),
    photos: generatePhotos()
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

// const events = generateEvents(EVENTS_COUNT);
export {generateEvent, generateEvents};


