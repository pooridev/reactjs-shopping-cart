import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  media: {
    height: 260
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardActions: {
    justifyContent: 'space-between'
  },
  buttons: {
    display: 'flex',
    alignItems: 'center'
  },
  itemName: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.4rem'
    }
  }
}));
