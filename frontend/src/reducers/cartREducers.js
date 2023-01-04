import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from '../constants/cardConstant';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CARD_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      return existItem
        ? {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          }
        : { ...state, cartItems: [...state.cartItems, item] };
    default:
      return state;
  }
};
