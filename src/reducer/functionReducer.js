import { ACTION_TYPE } from "../utils/constant";

export const initialValue = {
  meetups: [],
  searchTerm: "",
  eventType: "both"
};

export const functionReduder = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        meetups: action.payload
      };
    case ACTION_TYPE.SEARCH:
      return {
        ...state,
        searchTerm: action.payload
      };
    case ACTION_TYPE.EVENTTYPE:
      return {
        ...state,
        eventType: action.payload
      };
    default:
      console.log("Error in reducer");
  }
};
