import { makeStyles } from '@material-ui/core/styles';

export const useTimelineStyles = makeStyles({
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
});

// export const useSkillsStyles = makeStyles({
//   root: {
//     '& .MuiLabel-amount': {
//       fontSize: '0.75rem',
//       letterSpacing: 0.3,
//       marginLeft: 'auto',
//       paddingLeft: 16,
//     },
//   },
// });