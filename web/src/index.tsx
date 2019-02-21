import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore, { history } from "./configureStore";
import client from "./graphql/apollo-client";
import routes from "./routes";
import * as serviceWorker from "./serviceWorker";

import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import { ConnectedRouter } from "connected-react-router";
import { create } from "jss";
import { JssProvider } from "react-jss";
import ThemeProvider from "./themes/ThemeProvider";

const jssStyleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(jssStyleNode, document.head.firstChild);
const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: "insertion-point-jss"
});

const store = configureStore();

ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <Provider store={store} key="provider">
      <ThemeProvider>
        <ApolloProvider client={client}>
          <ConnectedRouter history={history}>{routes()}</ConnectedRouter>
        </ApolloProvider>
      </ThemeProvider>
    </Provider>
  </JssProvider>,
  document.getElementById("root") as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
