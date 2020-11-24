import { makeStyles } from '@material-ui/core/styles';

export const useTimelineStyles = makeStyles((theme) => ({
  logo: {
    width: '95%',
    height: '95%',
    marginLeft: '1px',
    marginTop: '1px',
  },
  missingOppositeContent: {
    '&:before': {
      flex: 0,
      padding: 0,
    },
  },
  paper: {
    padding: '6px 16px',
  },
  transparentTail: {
    backgroundColor: 'transparent',
  },
  primaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  primaryDot: {
    borderColor: theme.palette.primary.main,
  },
  noOpposite: {
    flex: 'none',
  },
  logoDot: {
    width: '24px',
    height: '24px',
  },
  emptyDotSeperator: {
    minWidth: '36px',
  },
  emptyDot: {
    marginLeft: '12px',
  },
}));
