import React, { useState, useEffect } from 'react';

import './app.scss';

import {
  HeaderComponent,
  TimelineComponent,
  SkillsComponent,
} from './components';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/core/styles';
// const theme = {
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// };
const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: purple[500],
    // },
    // secondary: {
    //   main: green[500],
    // },
  },
});
export const App = () => {
  const [data, setData]: [any, any] = useState();
  const [isLoading, setIsLoading]: [any, any] = useState(true);

  useEffect(() => {
    fetch('assets/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderComponent
          name={data.name}
          title={data.title}
          summary={data.summary}
          avatar={data.avatar}
          contactOptions={data.contacts}
        />
        <TimelineComponent timelineItems={data.jobs}></TimelineComponent>
        <SkillsComponent skills={data.skills}></SkillsComponent>
      </ThemeProvider>
    </>
  );
};

export default App;
