export const LOAD_CARDS = 'LOAD_CARDS';

function loadCards(cards) {
  return {
    type: LOAD_CARDS,
    cards
  };
}

export default {
  loadCards
};
