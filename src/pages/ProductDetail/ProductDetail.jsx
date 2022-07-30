import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/Products';
import HeaderProductDetail from '../../components/ProducDetail/HeaderProductDetail';
import '../../styles/ProductDetail.css'

function ProductDetail() {

  const [product, setProduct] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProduct(id);
      setProduct(result);
    }
    fetchData()
  }, []);

  return (

      <>
        <HeaderProductDetail />
        <main className='container'>
          <h2 className='container__title'>{ product.title }</h2>
          <p className='container__subtitle'> Price:
            <spam className='container__spam'> $ { product.price } </spam>
          </p>
          <p className='container__subtitle'> Description:
            <spam className='container__spam'> { product.description }.</spam>
          </p>
          <p className='container__subtitle'> Category:
            <spam className='container__spam'> { product.category } </spam>
          </p>
          {
            product.rating ? (
              <>
                <p className='container__subtitle'> Rate:
                  <spam className='container__spam'> { product.rating.rate } </spam>
                </p>
                <p className='container__subtitle'> Count:
                  <spam className='container__spam'> { product.rating.count } </spam>
                </p>
              </>
            ) : null

          }
          <img className='container__image' src={product.image} alt={product.title} />
        </main>
      </>
  );
}

export default ProductDetail;
