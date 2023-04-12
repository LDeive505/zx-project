import NavBar from '../components/NavBar';
import { ChangeEvent, useState } from 'react';

export default function Home() {
	const [inputSearch, setInputSearch] = useState<string>('');

	const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setInputSearch(target.value);
	};

	return (
		<div>
			<NavBar />
			<h1>Welcome to the Zelda Collection</h1>
			<label htmlFor="search-input">
				Search for a zelda game:
				<input
					type="text"
					id="search-input"
					value={inputSearch}
					onChange={onInputChange}
				/>
			</label>
		</div>
	);
}
