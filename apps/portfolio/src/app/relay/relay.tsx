import React from 'react';
import fetchGraphQL from './fetchGraphQL';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery
} from 'react-relay/hooks';
import RelayEnvironment from './relay-enironment';

const { Suspense } = React;

// Define a query
const RepositoryNameQuery = graphql`
  query relayRepositoryNameQuery {
    repository(owner: "adamstortz", name: "nx") {
      name
    }
  }
`;

const GistsQuery = graphql`
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
        }
      }
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
// const preloadedQuery = preloadQuery(RelayEnvironment, RepositoryNameQuery, {
/* query variables */
// });
const gistsQuery = preloadQuery(RelayEnvironment, GistsQuery, {});

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React is isn't
//   ready to render yet). This will show the nearest <Suspense> fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props) {
  // const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);
  const gists = usePreloadedQuery(GistsQuery, props.gistsQuery);
  const gistsRender = (
    <div>
      <h2>{gists.user.name}</h2>

      {gists.user.gists.nodes.map(gist => {
        return (
          <div>
            <h3>{gist.description}</h3>

            {gist.files.map(file => {
              return (
                <div>
                  <h4>{file.name}</h4>
                  <pre>{file.text}</pre>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
  return <div className="App">{gistsRender}</div>;
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App
          // preloadedQuery={preloadedQuery}
          gistsQuery={gistsQuery}
        />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
