// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Apollo from "./Apollo.bs.js";
import * as Container from "./components/Container.bs.js";
import * as Client from "@apollo/client";
import * as ValidatorsTable from "./components/ValidatorsTable.bs.js";

function App(Props) {
  return React.createElement(Client.ApolloProvider, {
              client: Apollo.client,
              children: React.createElement(Container.make, {
                    children: React.createElement(ValidatorsTable.make, {})
                  })
            });
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
