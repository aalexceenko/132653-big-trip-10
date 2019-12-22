import {FILTERS} from '../const.js';

const generateFilters = () => {
  return FILTERS.map((item) => {
    return {
      title: item,
    };
  });
};

export {generateFilters};
