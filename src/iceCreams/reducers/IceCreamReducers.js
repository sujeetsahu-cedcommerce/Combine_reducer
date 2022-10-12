import { ICECREAM } from "../types/Types";

const initialState = {
  No_of_IceCream: 10,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ICECREAM:
      return {
        ...state,
        No_of_IceCream: state.No_of_IceCream - action.payload,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
