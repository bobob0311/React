import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: "첫번째요",
    description: "첫번째입니다."
  },
  {
    id: 'p2',
    price: 5,
    title: "두번째요",
    description: "두번째입니다."
  },
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />

        ))}
      </ul>
    </section>
  );
};

export default Products;
