import React from 'react';

const Baslik = ({ karanlikModDegistir }) => {
	return (
		<div className='header'>
			<h1>Notlar</h1>
			<button onClick={() => karanlikModDegistir((oncekiMod) => !oncekiMod)} className='save'>
				Modu Değiştir
			</button>
		</div>
	);
};

export default Baslik;
