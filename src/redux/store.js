import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootIndexReducer";
import rootSaga from "./sagas/indexSaga";

import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

export default store;
