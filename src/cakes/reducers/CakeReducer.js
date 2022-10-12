import { CAKES } from "../types/Types";

const initialState = { No_of_cakes: 10 };

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKES:
      console.log(state);
      return { ...state, 
        No_of_cakes: state.No_of_cakes - action.payload };
    default:
      return state;
  }
};

export default cakeReducer;
