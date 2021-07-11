import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
  { id: 1, name: 'MacBook', description: 'Apple MackBooks', price: '$80' },
  { id: 2, name: 'Shoes', description: 'Nice Shoes', price: '$60' },
  { id: 3, name: 'Shoes', description: 'Nice Shoes', price: '$60' },
  { id: 4, name: 'Shoes', description: 'Nice Shoes', price: '$60' },
  { id: 5, name: 'Shoes', description: 'Nice Shoes', price: '$60' }
];

function Products() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Grid
        component='main'
        className={classes.content}
        container
        justify='center'
        spacing='3'
        style={{ maxWidth: '100%', margin: '0' }}>
        {products.map(product => (
          <Grid item key={product.id} xs='12' sm='6' md='4' lg='3'>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Products;
