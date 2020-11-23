import React, { useState, useEffect } from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/core/styles';

import { useAppStyles } from './app.styles';

import {
  HeaderComponent,
  TimelineComponent,
  SkillsComponent,
} from './components';
import { Box } from '@material-ui/core';

import { orange } from '@material-ui/core/colors';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    common: {
      sidebarWidth: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    common: {
      sidebarWidth: string;
    };
  }
}

const theme = createMuiTheme({
  common: {
    sidebarWidth: '200px',
  },
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
  const classes = useAppStyles({ withTheme: true });
  const [data, setData]: [any, any] = useState();
  const [isLoading, setIsLoading]: [any, any] = useState(true);
  const classNames = (...classNamez) => classNamez.join(' ');

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
        <Box className={classNames(classes.horizontal)}>
          <SkillsComponent skills={data.skills}></SkillsComponent>
          <TimelineComponent timelineItems={data.jobs}></TimelineComponent>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
