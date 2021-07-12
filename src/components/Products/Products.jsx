import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

function Products({ products }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <Grid
        component='main'
        className={classes.content}
        container
        justifyContent='center'
        spacing={4}
        style={{ margin: '0', maxWidth: '100%' }}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Products;
