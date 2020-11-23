import { makeStyles } from '@material-ui/core/styles';

export const useSkillsStyles = makeStyles((theme) => ({
  root: {
    '& .MuiLabel-amount': {
      fontSize: '0.75rem',
      letterSpacing: 0.3,
      marginLeft: 'auto',
      paddingLeft: 16,
    },
    width: theme.common.sidebarWidth,
  },
}));
