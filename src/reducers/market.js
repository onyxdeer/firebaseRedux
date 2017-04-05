import deck from '../Cards/cards';

export default function (state = deck, action) {
  switch (action.type) {
    case 'BUY_CARD':
      console.log(state);
      return state;
    case 'DEAL_CARD':
      return action.payload;
    case 'DEAL_NEW_MARKET':
      return action.payload;
    default:
      return state;
  }
}
