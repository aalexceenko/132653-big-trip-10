const getRandomIntegerNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

const generateRandomArrayItem = (array) => {
  return array[getRandomIntegerNumber(0, array.length - 1)];
};

const addLeadZero = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  const day = addLeadZero(date.getDate());
  const month = addLeadZero(date.getMonth() + 1);
  const year = String(date.getFullYear()).slice(2);

  return `${day}/${month}/${year}`;
};

const formatTime = (timestamp) => {
  const date = new Date(timestamp);

  const hours = addLeadZero(date.getHours());
  const minutes = addLeadZero(date.getMinutes());

  return `${hours}:${minutes}`;
};

const formatDuration = (time) => {
  const millisecondsInMinute = 60 * 1000;
  const millisecondsInHour = millisecondsInMinute * 60;

  const hours = addLeadZero(Math.floor(time / millisecondsInHour));
  const minutes = addLeadZero(Math.floor(time % millisecondsInHour / millisecondsInMinute));

  return `${hours > 0 ? `${hours}H` : ``} ${minutes}M`;
};
export {generateRandomArrayItem, getRandomIntegerNumber, formatTime, formatDate, formatDuration};
