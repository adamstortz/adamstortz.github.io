import { makeStyles } from '@material-ui/core/styles';

export const useHeaderStyles = makeStyles({
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  noWrap: {
    'white-space': 'nowrap',
  },
});
