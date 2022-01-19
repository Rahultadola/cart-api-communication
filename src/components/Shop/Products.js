import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'r1',
    price: 6,
    title: 'Pen',
    description: 'The first pen I ever bought',
  },
  {
    id: 'r2',
    price: 10,
    title: 'Marker',
    description: 'The first marker I ever bought',
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}

        
      </ul>
    </section>
  );
};

export default Products;
