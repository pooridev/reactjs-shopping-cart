import {
  Card,
  CardActions,
  Typography,
  CardContent,
  IconButton,
  CardMedia
} from '@material-ui/core';

import { AddShoppingCart } from '@material-ui/icons';
import { useCart } from '../../providers/cart-context';
import useStyles from './styles';

function Product({ product }) {
  const { handleAddToCart } = useCart();
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h5'>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant='body2'
          color='textSecondary'
        />
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton
          onClick={() => handleAddToCart(product.id, 1)}
          aria-label='Add To Cart'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
