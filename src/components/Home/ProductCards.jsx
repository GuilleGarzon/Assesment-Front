import { useState, useEffect } from 'react';
import { getProducts } from '../../services/Products';
import ProductCard from './ProductCard';

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts();
      setProducts(result);
    };
    fetchData();
  }, []);

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductCards;
