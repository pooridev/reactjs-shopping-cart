import Logo from '../../assets/commerce.png';
import {
  AppBar,
  Badge,
  Typography,
  Toolbar,
  IconButton
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  let cartLink = null;

  if (location.pathname === '/') {
    cartLink = (
      <div className={classes.button}>
        <IconButton component={Link} to='/cart'>
          <Badge color='secondary' badgeContent={totalItems}>
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
    );
  }

  return (
    <AppBar
      component='nav'
      position='fixed'
      className={classes.appBar}
      color='inherit'>
      <Toolbar>
        <Typography component={Link} to='/' className={classes.title}>
          <img
            src={Logo}
            alt='Mine Commerce'
            height='25px'
            className={classes.image}
          />
          Shopping Cart
        </Typography>
      {cartLink}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
