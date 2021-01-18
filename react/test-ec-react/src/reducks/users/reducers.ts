import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        // stateとpayloadで被っている部分はpayloadの情報で上書きされる、payloadに情報がなかったときのためにstateもリターンする
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
