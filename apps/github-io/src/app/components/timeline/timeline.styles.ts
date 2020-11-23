import { makeStyles } from '@material-ui/core/styles';

export const useTimelineStyles = makeStyles((theme) => ({
  logo: {
    width: '100%',
  },
  '.MuiTimelineItem-missingOppositeContent:before': {
    flex: 0,
  },
  paper: {
    padding: '6px 16px',
  },
  transparentTail: {
    backgroundColor: 'transparent',
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
