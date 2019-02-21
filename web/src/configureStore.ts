import { createBrowserHistory } from "history";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store
} from "redux";
import createSagaMiddleware from "redux-saga";
import reducers, { InitialState } from "./reducers";
import rootSaga from "./sagas";

export const history = createBrowserHistory();

const composeEnhancers =
  // tslint:disable-next-line: no-string-literal
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const configureStore = (): Store<any, AnyAction> => {
  const combined = combineReducers(reducers(history));
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const store = createStore(
    combined,
    InitialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
