import { CHOCOLATES } from "../types/Types";

const initialState = {
  No_of_Chocolates: 10,
};

const chocolateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOCOLATES:
      return {
        ...state,
        No_of_Chocolates: state.No_of_Chocolates - action.payload,
      };
    default:
      return state;
  }
};

export default chocolateReducer;
