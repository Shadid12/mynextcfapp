import styles from '../styles/Home.module.css'
import { getProducts } from '../db';

export const config = {
  runtime: 'experimental-edge',
}


export async function getServerSideProps() {
  const fauna_secret = process.env.FAUNA_SECRET;
  const node_env = process.env.NODE_VERSION;
  const products = await getProducts();
  return {
    props: {
      products,
      fauna_secret,
      node_env
    },
  }
}


export default function Home({ products, fauna_secret, node_env }) {
  console.log(products);
  console.log('===>', fauna_secret);
  console.log('===>', node_env);
  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <ul>
      {
        products.map((product) => (
          <li key={product._id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))
      }
      </ul>
    </div>
  )
}