import NavBar from '../../components/Home/NavBar';
import '../../styles/About.css';

const About = () => (
	<>
		<NavBar />
		<main className='main'>
			<h1 className='main__title'>Guillermo Garzón Díaz</h1>
			<article className='article'>
				<img src='./perfil.jpg' alt='profile' className='article__image' />
				<p className='article__p'>
					I am a mechatronic engineer with experience in fields related to
					mobile telecommunications in areas such as network operations center
					and monitoring systems for power and telecommunications equipment. I
					am currently doing the fullstack developer bootcamp in make it real.
				</p>
				<h3>Things I have learned</h3>
				<ul className='article__p'>
					<li>Functional JavaScript</li>
					<li>React</li>
					<li>Github</li>
				</ul>

				<p className='article__p'>
					<strong>Email: </strong>guillegarzon.gg@gmail.com
				</p>
				<a
					href='https://github.com/GuilleGarzon'
					target='_blank'
					rel='noreferrer'
					className='article__link'
				>
					<p className='article__p'>My Github</p>
				</a>
			</article>
		</main>
	</>
);

export default About;
