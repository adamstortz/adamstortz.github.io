import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { LinkedIn, Email, Phone, GitHub, Home } from '@material-ui/icons';

import './header.scss';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';

const icons = { LinkedIn, Email, Phone, Home, GitHub };
const useStyles = makeStyles((theme) => ({
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  noWrap: {
    'white-space': 'nowrap',
  },
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const HeaderComponent = ({ avatar, contactOptions }) => {
  const classes = useStyles();
  const tableExample = (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
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
