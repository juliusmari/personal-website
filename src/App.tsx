import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import Collaboration from './components/Collaboration';
function App() {
	return (
		<div className='select-none'>
			<NavBar />
			<Home />
			<About />
			<Collaboration />
			<Experience />
			<Contact />
			<Footer />
			<SocialLinks />
		</div>
	);
}

export default App;
