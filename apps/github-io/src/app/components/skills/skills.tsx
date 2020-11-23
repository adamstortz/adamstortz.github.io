import React from 'react';

import { Box, List, ListItem } from '@material-ui/core';

import { useSkillsStyles } from './skills.styles';

export const SkillsComponent = ({ skills }) => {
  const classes = useSkillsStyles();
  const skillz = skills.map((skill, index) => (
    <ListItem className={classes.root} key={`skill-${index}`}>
      <span>xx</span>
      Inbox
      <span className={'MuiLabel-amount'}>1,183</span>
    </ListItem>
  ));
  return (
    <Box minWidth={256} bgcolor={'#fff'}>
      <List dense={true}>{skillz}</List>
    </Box>
  );
};
export default SkillsComponent;
