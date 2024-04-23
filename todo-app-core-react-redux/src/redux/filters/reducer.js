/* eslint-disable no-case-declarations */
import { COLORCHANGED, STATUSCGANGED } from "./actionTypes";
import initialState from "./initialState";

// filters reducer
const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCGANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLORCHANGED:
      const { color, chnageType } = action.payload;
      switch (chnageType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default filtersReducer;
