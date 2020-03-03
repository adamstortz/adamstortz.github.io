import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import jsx from "jsxdirect";
import Editor from "./Editor";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery
} from "react-relay/hooks";
import RelayEnvironment from "./relay/RelayEnvironment";
import * as Babel from "@babel/standalone";
// import { createEditor } from "./Editor";
const { Suspense } = React;

// Define a query
const AppUserGistsQuery = graphql`
  query AppUserGistsQuery($login: String!) {
    user(login: $login) {
      gists(first: 1) {
        nodes {
          name
          description
          files {
            name
            text
          }
        }
      }
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = preloadQuery(RelayEnvironment, AppUserGistsQuery, {
  login: "adamstortz"
});

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React is isn't
//   ready to render yet). This will show the nearest <Suspense> fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props) {
  const data = usePreloadedQuery(AppUserGistsQuery, props.preloadedQuery);
  // const [code, setCode] = useState(`import x from 'x';

  // // edit this example

  // function Greet() {
  //   return <span>Hello World!</span>
  // }

  // <Greet />`);
  // const [editor, setEditor] = useState();
  // // const [el, setEl] = useState();
  // const el = useRef();

  // const run = () => {
  //   editor.run(code);
  // };

  // useEffect(() => {
  //   console.log(el);
  //   const ed = createEditor(el);
  //   setEditor(ed);
  //   // ed.run(code);
  // }, []);

  // useEffect(() => {
  //   if (el && editor) {
  //     run();
  //   }
  // }, [el, editor]);

  // const jsxString = data.user.gists.nodes[0].files[0].text;
  // const jsxString = "<div>hi</div>";
  // console.log(jsxString);
  // // const GistComp = jsx(jsxString);
  // // console.log(GistComp);
  // // var Output = Babel.transform(jsxString, { presets: ["es2015"] }).code;
  // const onCodeChange = ({ target: { value } }) => {
  //   setCode(value);
  //   run(value);
  // };
  // var input = 'const getMessage = () => "Hello World";';
  // var Output = Babel.transform(input, { presets: ["es2015"] }).code;
  // console.log(Output);
  // Output();
  // ReactDOM.render(
  //   jsx.compile("function() { return(<div>Pretty cool, huh?</div>) }")(),
  //   document.createElement("div")
  // );
  // const compiled = jsx(data.user.gists.nodes[0].files[0].text);
  // console.log(compiled);
  // https://codesandbox.io/s/react-live-editor-nw8rz
  // https://codesandbox.io/s/patient-cookies-5z09h
  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(data)}</p>
        <div className="split-view">
          <div className="code-editor">
            <textarea value={code} onChange={onCodeChange} />
          </div>
          <div className="preview" ref={el} />
        </div>
      </header>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
