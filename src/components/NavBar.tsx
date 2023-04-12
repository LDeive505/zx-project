import { Link } from 'react-router-dom';
import '../styles/componentStyles/NavBar.css';

export default function NavBar() {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/games">Games</Link>
				</li>
				<li>
					<Link to="/characters">Characters</Link>
				</li>
				<li>
					<Link to="/bosses">Bosses</Link>
				</li>
			</ul>
		</nav>
	);
}
