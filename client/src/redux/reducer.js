import { LOAD_CARDS } from './actions';

const initialState = {
  cards: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return {
        cards: [1]
      };
    default:
      return {
        cards: [2]
      };
  }
};
