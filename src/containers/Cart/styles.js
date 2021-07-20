import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    fontSize: '2rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.4rem'
    }
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px'
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px'
    }
  },
  checkoutButton: {
    minWidth: '150px'
  },
  link: {
    textDecoration: 'none'
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subtotal: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem'
    }
  }
}));
