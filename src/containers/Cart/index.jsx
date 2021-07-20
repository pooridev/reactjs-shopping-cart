import { Container, Typography, Grid, Button } from '@material-ui/core';
import CartItem from '../../components/CartItem';
import { Link } from 'react-router-dom';
import { useCart } from './../../providers/cart-context';
import { useEffect } from 'react';
import Spinner from './../../components/Spinner/index';

import useStyles from './styles';

const Cart = () => {
  const {
    cart,
    fetchCart,
    handleUpdateCartQty,
    handleRemoveFromCart,
    handleEmptyCart
  } = useCart();

  useEffect(() => fetchCart(), [fetchCart]);

  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      You have no items in your shopping cart,{' '}
      <Link to='/'>start adding some!</Link>
    </Typography>
  );

  if (!cart.line_items) return <Spinner />;

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
