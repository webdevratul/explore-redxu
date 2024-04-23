// actions filters
import { STATUSCGANGED, COLORCHANGED } from "./actionTypes";

export const statusChanged = (status) => {
  return {
    type: STATUSCGANGED,
    payload: status,
  };
};

export const colorChanged = (color, chnageType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      chnageType,
    },
  };
};
