// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Pervasives from "rescript/lib/es6/pervasives.js";
import * as ApolloClient__React_Hooks_UseSubscription from "rescript-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseSubscription.bs.js";

var thStyle = {
  backgroundColor: "#89CFF0",
  minWidth: "40px",
  padding: "14px",
  borderRadius: "4px"
};

var rowStyle = {
  textAlign: "center"
};

var tdStyle = {
  padding: "8px"
};

var Raw = {};

var query = (require("@apollo/client").gql`
  subscription GetValidators  {
    validators  {
      __typename
      id
      moniker
      status
      tokens
      validator_report_count  {
        __typename
        count
      }
    }
  }
`);

function parse(value) {
  var value$1 = value.validators;
  return {
          validators: value$1.map(function (value) {
                var value$1 = value.validator_report_count;
                var tmp;
                if (value$1 == null) {
                  tmp = undefined;
                } else {
                  var value$2 = value$1.count;
                  tmp = {
                    __typename: value$1.__typename,
                    count: !(value$2 == null) ? value$2 : undefined
                  };
                }
                return {
                        __typename: value.__typename,
                        id: value.id,
                        moniker: value.moniker,
                        status: value.status,
                        tokens: value.tokens,
                        validator_report_count: tmp
                      };
              })
        };
}

function serialize(value) {
  var value$1 = value.validators;
  var validators = value$1.map(function (value) {
        var value$1 = value.validator_report_count;
        var validator_report_count;
        if (value$1 !== undefined) {
          var value$2 = value$1.count;
          var count = value$2 !== undefined ? value$2 : null;
          var value$3 = value$1.__typename;
          validator_report_count = {
            __typename: value$3,
            count: count
          };
        } else {
          validator_report_count = null;
        }
        var value$4 = value.tokens;
        var value$5 = value.status;
        var value$6 = value.moniker;
        var value$7 = value.id;
        var value$8 = value.__typename;
        return {
                __typename: value$8,
                id: value$7,
                moniker: value$6,
                status: value$5,
                tokens: value$4,
                validator_report_count: validator_report_count
              };
      });
  return {
          validators: validators
        };
}

function serializeVariables(param) {
  
}

function makeVariables(param) {
  
}

function makeDefaultVariables(param) {
  
}

var ValidatorsSub_inner = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables
};

var include = ApolloClient__React_Hooks_UseSubscription.Extend({
      query: query,
      Raw: Raw,
      parse: parse,
      serialize: serialize,
      serializeVariables: serializeVariables
    });

var use = include.use;

var ValidatorsSub = {
  ValidatorsSub_inner: ValidatorsSub_inner,
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables,
  use: use
};

function ValidatorsTable(Props) {
  var validatorsData = Curry._7(use, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  var data = validatorsData.data;
  return React.createElement("div", {
              style: {
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center"
              }
            }, React.createElement("table", undefined, React.createElement("thead", undefined, React.createElement("tr", undefined, React.createElement("th", {
                              style: thStyle
                            }, "Id"), React.createElement("th", {
                              style: thStyle
                            }, "Moniker"), React.createElement("th", {
                              style: thStyle
                            }, "Status"), React.createElement("th", {
                              style: thStyle
                            }, "Tokens"))), React.createElement("tbody", undefined, data !== undefined ? Belt_Array.map(data.validators, (function (item) {
                              return React.createElement("tr", {
                                          key: String(item.id),
                                          style: rowStyle
                                        }, React.createElement("td", {
                                              style: tdStyle
                                            }, String(item.id)), React.createElement("td", {
                                              style: tdStyle
                                            }, item.moniker), React.createElement("td", {
                                              style: tdStyle
                                            }, Pervasives.string_of_bool(item.status)), React.createElement("td", {
                                              style: tdStyle
                                            }, JSON.stringify(item.tokens)));
                            })) : null)));
}

var make = ValidatorsTable;

export {
  thStyle ,
  rowStyle ,
  tdStyle ,
  ValidatorsSub ,
  make ,
  
}
/* query Not a pure module */
