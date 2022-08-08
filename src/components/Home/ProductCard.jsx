import PropTypes from 'prop-types';
import Timer from './Timer';
import '../../styles/Home.css';

const ProductCard = ({ product }) => (
	<div className="section">
		<img src={product.image} alt={product.title} className='section__image' />
		<h3 className='section__title'>{product.title}</h3>
		<Timer link={`/detail/${product.id}`} />
	</div>
);

ProductCard.propTypes = {
  product: PropTypes.func
}

ProductCard.defaultProps = {
  product: () => null
}


export default ProductCard;
