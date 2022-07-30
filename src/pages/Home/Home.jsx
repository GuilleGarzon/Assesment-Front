import HeaderHome from '../../components/Home/HeaderHome';
import ProductCard from '../../components/Home/ProductCard';
import '../../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <HeaderHome />
      <div className='home__section'>
        <ProductCard />
      </div>
    </div>
  );
}

export default Home;
