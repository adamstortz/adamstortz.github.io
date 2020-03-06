/* tslint:disable */
/* eslint-disable */
/* @relayHash a6e2952e96bb378e58a2e5207fc473ef */

import { ConcreteRequest } from "relay-runtime";
export type relayGistsQueryVariables = {};
export type relayGistsQueryResponse = {
    readonly user: {
        readonly name: string | null;
        readonly gists: {
            readonly nodes: ReadonlyArray<{
                readonly name: string;
                readonly description: string | null;
                readonly files: ReadonlyArray<{
                    readonly name: string | null;
                    readonly extension: string | null;
                    readonly text: string | null;
                } | null> | null;
            } | null> | null;
        };
    } | null;
};
export type relayGistsQuery = {
    readonly response: relayGistsQueryResponse;
    readonly variables: relayGistsQueryVariables;
};



/*
query relayGistsQuery {
  user(login: "adamstortz") {
    name
    gists(first: 5) {
      nodes {
        name
        description
        files {
          name
          extension
          text
        }
        id
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "adamstortz"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "files",
  "storageKey": null,
  "args": null,
  "concreteType": "GistFile",
  "plural": true,
  "selections": [
    (v1/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "extension",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "text",
      "args": null,
      "storageKey": null
    }
  ]
},
v5 = {
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
    "name": "relayGistsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": "user(login:\"adamstortz\")",
        "args": (v0/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "gists",
            "storageKey": "gists(first:5)",
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
                  (v1/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
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
    "name": "relayGistsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": "user(login:\"adamstortz\")",
        "args": (v0/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "gists",
            "storageKey": "gists(first:5)",
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
                  (v1/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ]
              }
            ]
          },
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "relayGistsQuery",
    "id": null,
    "text": "query relayGistsQuery {\n  user(login: \"adamstortz\") {\n    name\n    gists(first: 5) {\n      nodes {\n        name\n        description\n        files {\n          name\n          extension\n          text\n        }\n        id\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e979bff334132228ac45890eeac792f8';
export default node;
