import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
// import { ProductReducer } from "../products/reducers";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { UsersReducer } from "../users/reducers";

const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
};

export default createStore;