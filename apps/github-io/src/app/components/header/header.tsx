import React from 'react';
import { LinkedIn, Email, Phone, GitHub, Home } from '@material-ui/icons';
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';

import { useHeaderStyles } from './header.styles';

const icons = { LinkedIn, Email, Phone, Home, GitHub };

export const HeaderComponent = ({
  avatar,
  contactOptions,
  name,
  title,
  summary,
}) => {
  const classes = useHeaderStyles({ withTheme: true });
  const classNames = (...classNamez) => classNamez.join(' ');
  const contacts = contactOptions.map((contactOption, optionIndex) => {
    const contactKey = `contact-${optionIndex}`;
    const Icon = icons[contactOption.type];
    const itemText = contactOption.text.map((text, textIndex) => (
      <div className={classes.noWrap} key={`${contactKey}-text-${textIndex}`}>
        {text}
      </div>
    ));
    return (
      <ListItem key={contactKey}>
        <ListItemAvatar>
          <Icon />
        </ListItemAvatar>
        <ListItemText>{itemText}</ListItemText>
      </ListItem>
    );
  });
  return (
    <div>
      <Box className={classNames(classes.horizontal, classes.root)} color="red">
        <img
          className={classes.headshot}
          alt={avatar.altText}
          src={avatar.imageUri}
        />
        <Box className={classes.box}>
          <Typography variant="h2">{name}</Typography>
          <Typography variant="body1">{title}</Typography>
        </Box>
        <Box className={classes.box}>
          <Typography variant="overline">{summary}</Typography>
        </Box>
      </Box>
      <List
        dense={true}
        className={classNames(classes.horizontal, classes.contactBar)}
      >
        {contacts}
      </List>
    </div>
  );
};
export default HeaderComponent;
