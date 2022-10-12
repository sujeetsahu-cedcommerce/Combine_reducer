import { ICECREAM } from "../types/Types";

export const iceCreams = (data) => {
  return {
    type: ICECREAM,
    payload: data,
  };
};
