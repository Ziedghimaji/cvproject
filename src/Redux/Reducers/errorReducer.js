import { GET_ERRORS } from "../action/actionTypes";

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};
