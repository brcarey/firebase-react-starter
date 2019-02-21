import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";

export default (history: History) => ({
  router: connectRouter(history)
});

export const InitialState: StateTree = {};

export type StateTree = {
  router?: RouterState;
};
