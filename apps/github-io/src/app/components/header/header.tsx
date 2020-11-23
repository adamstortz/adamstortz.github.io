import React from 'react';
import { LinkedIn, Email, Phone, GitHub, Home } from '@material-ui/icons';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';

import { useHeaderStyles } from './header.styles';

const icons = { LinkedIn, Email, Phone, Home, GitHub };

export const HeaderComponent = ({ avatar, contactOptions }) => {
  const classes = useHeaderStyles();
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
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>{itemText}</ListItemText>
      </ListItem>
    );
  });
  return (
    <div>
      <Avatar alt={avatar.altText} src={avatar.imageUri} />
      <List dense={true} className={classes.horizontal}>
        {contacts}
      </List>
    </div>
  );
};
export default HeaderComponent;
