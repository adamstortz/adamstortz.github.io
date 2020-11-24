import { makeStyles } from '@material-ui/core/styles';

export const useAppStyles = makeStyles((theme) => ({
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  box: {
    paddingLeft: '30px',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    '&@media print': { dispay: 'none' },
  },
}));
