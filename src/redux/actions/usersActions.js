import * as types from "../types";

export function getUsers(users) {
  return {
    type: types.GET_USERS_REQUEST,
    payload: users,
  };
}
