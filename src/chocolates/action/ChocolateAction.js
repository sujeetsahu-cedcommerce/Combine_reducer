import { CHOCOLATES } from "../types/Types";

export const Chocolates = (data) => {
  return {
    type: CHOCOLATES,
    payload: data,
  };
};
