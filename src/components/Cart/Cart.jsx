import { Container, Typography, Grid, Button } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = props => {
  const { cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart } =
    props;
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      You have no items in your shopping cart,{' '}
      <Link to='/'>start adding some!</Link>
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map(item => (
          <Grid item xs={12} lg={4} sm={6} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography className={classes.subtotal} variant='h5' gutterBottom>
          Total price: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size='large'
            type='button'
            variant='contained'
            color='primary'
            onClick={handleEmptyCart}>
            Empty Cart
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant='h3' gutterBottom className={classes.title}>
        Your shopping cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
