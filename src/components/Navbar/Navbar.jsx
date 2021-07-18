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

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <AppBar
      component='nav'
      position='fixed'
      className={classes.appBar}
      color='inherit'>
      <Toolbar>
        <Typography className={classes.title}>
          <img
            src={Logo}
            alt='Mine Commerce'
            height='25px'
            className={classes.image}
          />
          Reactjs E-commerce
        </Typography>
        <div className={classes.button}>
          <IconButton>
            <Badge color='secondary' badgeContent={totalItems}>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
