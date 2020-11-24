import { makeStyles } from '@material-ui/core/styles';

export const useHeaderStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  link: {
    color: 'white',
  },
  contactAvatar: {
    minWidth: '32px',
  },
  contactBar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  box: {
    paddingLeft: '30px',
    '&.name': {
      width: '120px',
    },
    '&.summary': {
      width: '45%',
    },
  },
  noWrap: {
    whiteSpace: 'nowrap',
  },
  headshot: {
    width: theme.common.sidebarWidth,
  },
  row1: {
    height: theme.common.sidebarWidth,
  },
  name: {
    fontSize: theme.typography.h3.fontSize,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 'bold',
  },
  summary: {
    // marginLeft: '20px',

    fontSize: theme.typography.h6.fontSize,
  },
}));
