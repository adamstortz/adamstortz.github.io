import React from 'react';

import { Box, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import WhatshotIcon from '@material-ui/icons/WhatshotRounded';
import { useSkillsStyles } from './skills.styles';

export const SkillsComponent = ({ skills }) => {
  const classes = useSkillsStyles();
  const skillz = skills.map((skill, index) => (
    <div key={`skill-${index}`}>
      <Typography component="legend">{skill.name}</Typography>
      <Rating
        value={skill.rating}
        readOnly={true}
        icon={<WhatshotIcon fontSize="inherit" />}
        max={skill.rating < 5 ? 5 : skill.rating}
      />
    </div>
  ));
  return (
    <Box className={classes.root}>
      <Typography variant="h4">Skills</Typography>
      <Box borderColor="transparent">{skillz}</Box>
    </Box>
  );
};
export default SkillsComponent;
