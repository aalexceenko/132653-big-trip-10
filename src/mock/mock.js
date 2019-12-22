import {EVENT_TYPES, CITIES, OFFERS, DESCRIPTIONS} from '../const.js';
import {getRandomIntegerNumber, getRandomArrayItem} from '../utils.js';

const generateDescription = (array) => {
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
  const resultArrayLength = getRandomIntegerNumber(1, restArray.length);
  const result = [];

  for (let i = 0; i < resultArrayLength; i++) {
    result.push(getRandomArrayItem(restArray));
  }

  return result.slice(0, 2);
};


const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffDateValue = sign * getRandomIntegerNumber(0, 2);
  const diffHoursValue = sign * getRandomIntegerNumber(0, 24);
  const diffMinutesValue = sign * getRandomIntegerNumber(0, 60);

  targetDate.setDate(targetDate.getDate() + diffDateValue);
  targetDate.setHours(targetDate.getHours() + diffHoursValue);
  targetDate.setMinutes(targetDate.getMinutes() + diffMinutesValue);

  return targetDate;
};


const generateEvent = () => {

  const firstRandomDate = getRandomDate();
  const secondRandomDate = getRandomDate();
  const startDate = (firstRandomDate < secondRandomDate) ? firstRandomDate : secondRandomDate;
  const endDate = (firstRandomDate > secondRandomDate) ? firstRandomDate : secondRandomDate;


  return {
    type: getRandomArrayItem([...EVENT_TYPES.transfers, ...EVENT_TYPES.activities]),
    city: getRandomArrayItem(CITIES),
    startDate,
    endDate,
    offers: generateOffers(OFFERS),
    price: getRandomIntegerNumber(10, 200),
    description: generateDescription(DESCRIPTIONS),
    photos: generatePhotos()
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

export {generateEvent, generateEvents};


