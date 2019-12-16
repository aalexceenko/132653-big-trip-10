const getRandomIntegerNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

const generateRandomArrayItem = (array) => {
  return array[getRandomIntegerNumber(0, array.length - 1)];
};

// const addLeadZero = (value) => {
//   return value < 10 ? `0${value}` : String(value);
// };

// const formatTime = (timestamp) => {
//   const date = new Date(timestamp);

//   const hours = addLeadZero(date.getHours());
//   const minutes = addLeadZero(date.getMinutes());

//   return `${hours}:${minutes}`;
// };

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  const interval = date.getHours() > 11 ? `pm` : `am`;

  return `${hours}:${minutes} ${interval}`;
};

export {generateRandomArrayItem, getRandomIntegerNumber, formatTime};
