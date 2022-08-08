import NavBar from '../../components/Home/NavBar';
import ProductCards from '../../components/Home/ProductCards';
import '../../styles/Home.css';

const Home = () => (
	<div className='home'>
		<NavBar />
		<div className='home__section'>
			<ProductCards />
		</div>
	</div>
);

export default Home;
