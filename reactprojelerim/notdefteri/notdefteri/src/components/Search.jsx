import React from 'react';
import { MdSearch } from 'react-icons/md';

const Arama = ({ notArama }) => {
	return (
		<div className='search'>
			<MdSearch className='search-icons' size='1.3em' />
			<input onChange={(event) => notArama(event.target.value)} type='text' placeholder='Aramak için yazın...' />
		</div>
	);
};

export default Arama;
