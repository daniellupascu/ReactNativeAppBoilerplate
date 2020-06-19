import { ADD_ITEM } from "../actions/item";

type ActionType = {
  type: string;
  item: object;
};

const initialState = {
  items: [],
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.item] };
    default:
      return state;
  }
};
