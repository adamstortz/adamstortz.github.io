/**
 * @flow
 * @relayHash 6b0a7d0318f8688a318acaadc08cbe9e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppUserGistsQueryVariables = {|
  login: string
|};
export type AppUserGistsQueryResponse = {|
  +user: ?{|
    +gists: {|
      +nodes: ?$ReadOnlyArray<?{|
        +name: string,
        +description: ?string,
        +files: ?$ReadOnlyArray<?{|
          +name: ?string,
          +text: ?string,
        |}>,
      |}>
    |}
  |}
|};
export type AppUserGistsQuery = {|
  variables: AppUserGistsQueryVariables,
  response: AppUserGistsQueryResponse,
|};
*/


/*
query AppUserGistsQuery(
  $login: String!
) {
  user(login: $login) {
    gists(first: 1) {
      nodes {
        name
        description
        files {
          name
          text
        }
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "login",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "files",
  "storageKey": null,
  "args": null,
  "concreteType": "GistFile",
  "plural": true,
  "selections": [
    (v3/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "text",
      "args": null,
      "storageKey": null
    }
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppUserGistsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "gists",
            "storageKey": "gists(first:1)",
            "args": (v2/*: any*/),
            "concreteType": "GistConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "Gist",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppUserGistsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "gists",
            "storageKey": "gists(first:1)",
            "args": (v2/*: any*/),
            "concreteType": "GistConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "Gist",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/)
                ]
              }
            ]
          },
          (v6/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppUserGistsQuery",
    "id": null,
    "text": "query AppUserGistsQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    gists(first: 1) {\n      nodes {\n        name\n        description\n        files {\n          name\n          text\n        }\n        id\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a7afab1e44b60f8442d2ddef59e46265';

module.exports = node;
