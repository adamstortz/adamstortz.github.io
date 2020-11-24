import React from 'react';
import { LinkedIn, Email, Phone, GitHub, Home } from '@material-ui/icons';
import {
  Box,
  Link,
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
    const itemText = contactOption.link ? (
      <Link
        className={classes.link}
        underline="always"
        target="_blank"
        href={contactOption.link}
      >
        {contactOption.text[0]}
      </Link>
    ) : (
      contactOption.text.map((text, textIndex) => (
        <div className={classes.noWrap} key={`${contactKey}-text-${textIndex}`}>
          {text}
        </div>
      ))
    );
    return (
      <ListItem key={contactKey}>
        <ListItemAvatar className={classes.contactAvatar}>
          <Icon />
        </ListItemAvatar>
        <ListItemText>{itemText}</ListItemText>
      </ListItem>
    );
  });
  return (
    <div>
      <Box
        className={classNames(classes.horizontal, classes.root, classes.row1)}
      >
        <img
          className={classes.headshot}
          alt={avatar.altText}
          src={avatar.imageUri}
        />
        <Box className={classNames(classes.box)}>
          <Typography variant="h2" className={classes.name}>
            {name}
          </Typography>
          <Typography variant="overline" className={classes.title}>
            {title}
          </Typography>
        </Box>
        <Box className={classNames(classes.box, 'summary')}>
          <Typography variant="body1" className={classes.summary}>
            {summary}
          </Typography>
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
