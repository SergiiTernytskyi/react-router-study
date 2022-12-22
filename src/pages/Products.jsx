import { useSearchParams } from 'react-router-dom';
import { ProductList } from 'components/ProductList/ProductList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getProducts } from '../fakeApi';

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const productName = searchParams.get('name') ?? '';

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLocaleLowerCase())
  );

  const searchHandler = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={productName} onChange={searchHandler} />
      <ProductList products={filteredProducts} />
    </main>
  );
};

export default Products;
