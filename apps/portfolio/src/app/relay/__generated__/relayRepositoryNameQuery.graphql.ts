/* tslint:disable */
/* eslint-disable */
/* @relayHash cc7cc945f45f653cfebfbf20f3a7625c */

import { ConcreteRequest } from "relay-runtime";
export type relayRepositoryNameQueryVariables = {};
export type relayRepositoryNameQueryResponse = {
    readonly repository: {
        readonly name: string;
    } | null;
};
export type relayRepositoryNameQuery = {
    readonly response: relayRepositoryNameQueryResponse;
    readonly variables: relayRepositoryNameQueryVariables;
};



/*
query relayRepositoryNameQuery {
  repository(owner: "adamstortz", name: "nx") {
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "nx"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "adamstortz"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "relayRepositoryNameQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": "repository(name:\"nx\",owner:\"adamstortz\")",
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "relayRepositoryNameQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": "repository(name:\"nx\",owner:\"adamstortz\")",
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "relayRepositoryNameQuery",
    "id": null,
    "text": "query relayRepositoryNameQuery {\n  repository(owner: \"adamstortz\", name: \"nx\") {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '51601d5d03e1e69266ea53256633c442';
export default node;
