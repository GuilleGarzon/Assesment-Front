import { useState, useEffect } from 'react';
import { getProducts } from '../../services/Products';
import Timer from './Timer';
import '../../styles/Home.css';


function ProductCard() {
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
        <section key={product.id} className="section">
          <img src={product.image} alt={product.title} className="section__image" />
          <h3 className='section__title'>{product.title}</h3>
          <Timer link={`/detail/${product.id}`} />
        </section>
      ))}
    </>
  );
}

export default ProductCard;
