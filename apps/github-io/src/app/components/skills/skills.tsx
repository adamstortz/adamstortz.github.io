import React from 'react';

import { Box, List, ListItem, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useSkillsStyles } from './skills.styles';

export const SkillsComponent = ({ skills }) => {
  const classes = useSkillsStyles();
  const skillz = skills.map((skill, index) => (
    <>
      <Typography component="legend">{skill.name}</Typography>
      <Rating
        value={skill.rating}
        readOnly={true}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
    </>
  ));
  return (
    <Box className={classes.root}>
      <Typography variant="h4">Skills</Typography>
      <Box borderColor="transparent">{skillz}</Box>
    </Box>
  );
};
export default SkillsComponent;
