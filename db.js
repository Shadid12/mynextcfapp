import fauna from 'faunadb';

const q = fauna.query;

const client = new fauna.Client({ secret: 'fnAE7JV9P0ACT3La9djQtpvnOPa5MzHI_DafJtxl' });

export const createProduct = async (title, price, description) => {
  const product = {
    data: {
      title,
      price,
      description,
    },
  };
  return client.query(q.Create(q.Collection('Product'), product));
};

export const getProducts = async () => {
  const response = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('Product'))),
      q.Lambda(x => q.Get(x))
    )
  );
  const products = response.data.map((product) => ({ ...product.data, _id: product.ref.id }));
  return products;
}