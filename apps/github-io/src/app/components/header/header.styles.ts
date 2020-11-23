import { makeStyles } from '@material-ui/core/styles';

export const useHeaderStyles = makeStyles((theme) => ({
  root: (props) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  }),
  contactBar: (props) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
  }),
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  box: {
    paddingLeft: '30px',
  },
  noWrap: {
    whiteSpace: 'nowrap',
  },
  headshot: {
    width: theme.common.sidebarWidth,
  },
}));
