import { CAKES } from "../types/Types";

export const Cakes = (data) => {
  return {
    type: CAKES,
    payload: data,
  };
};
