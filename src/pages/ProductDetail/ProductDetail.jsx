import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/Products';
import NavBar from '../../components/Home/NavBar'
import '../../styles/ProductDetail.css'

const ProductDetail = () => {

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
        <NavBar />
        <main className='container'>
          <h2 className='container__title'>{ product.title }</h2>
          <p className='container__subtitle'> Price:
            <span className='container__span'> $ { product.price } </span>
          </p>
          <p className='container__subtitle'> Description:
            <span className='container__span'> { product.description }</span>
          </p>
          <p className='container__subtitle'> Category:
            <span className='container__span'> { product.category } </span>
          </p>
          {
            product.rating && (
              <>
                <p className='container__subtitle'> Rate:
                  <span className='container__span'> { product.rating.rate } </span>
                </p>
                <p className='container__subtitle'> Count:
                  <span className='container__span'> { product.rating.count } </span>
                </p>
              </>
            )

          }
          <img className='container__image' src={product.image} alt={product.title} />
        </main>
      </>
  );
}

export default ProductDetail;
