import React, { useState, useEffect } from 'react';
import { display } from '@material-ui/system';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import { CloudDownload } from '@material-ui/icons';

import { useAppStyles } from './app.styles';

import {
  HeaderComponent,
  TimelineComponent,
  SkillsComponent,
} from './components';
import { Box, Fab } from '@material-ui/core';

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
    primary: {
      main: '#c5bfb3',
    },
    secondary: {
      main: '#515a77',
    },
  },
  typography: {
    fontFamily: "'Fira Code', monospace",
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
        <Box display="block" displayPrint="none" className={classes.fab}>
          <Fab
            color="secondary"
            size="small"
            href="assets/Adam Stortz.pdf"
            aria-label="Download"
            target="_blank"
          >
            <CloudDownload />
          </Fab>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
