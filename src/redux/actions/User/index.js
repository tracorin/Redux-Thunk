import { SET_USERS } from "../ActionTypes";
import axios from "axios";

export const setUserAction = (payload) => ({
  type: SET_USERS,
  payload,
});

export const getUser = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (response.status === 200 && response.data.length > 0) {
    dispatch(setUserAction(response.data));
  }
};
