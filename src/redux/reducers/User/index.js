import { SET_USERS } from "../../actions/ActionTypes";

const defaultState = {
  users: [],
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    default:
      return state;
  }
};
