import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotListesi from './components/NotesList';
import Arama from './components/Search';
import Baslik from './components/Header';
import './App.css';


const App = () => {
	const [notlar, setNotlar] = useState([
		{ id: nanoid(), metin: 'İlk notum!', tarih: '15/04/2021' },
		{ id: nanoid(), metin: 'İkinci notum!', tarih: '21/04/2021' },
		{ id: nanoid(), metin: 'Üçüncü notum!', tarih: '28/04/2021' },
	]);

	const [aramaMetni, setAramaMetni] = useState('');
	const [karanlikMod, setKaranlikMod] = useState(false);

	useEffect(() => {
		const kayitliNotlar = JSON.parse(localStorage.getItem('turkce-not-defteri'));
		if (kayitliNotlar) {
			setNotlar(kayitliNotlar);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('turkce-not-defteri', JSON.stringify(notlar));
	}, [notlar]);

	const notEkle = (metin) => {
		const tarih = new Date().toLocaleDateString();
		const yeniNot = { id: nanoid(), metin, tarih };
		setNotlar([...notlar, yeniNot]);
	};

	const notSil = (id) => {
		setNotlar(notlar.filter((not) => not.id !== id));
	};

	return (
		<div className={`${karanlikMod && 'dark-mode'}`}>
			<div className='container'>
				<Baslik karanlikModDegistir={setKaranlikMod} />
				<Arama notArama={setAramaMetni} />
				<NotListesi notlar={notlar.filter((not) => not.metin.toLowerCase().includes(aramaMetni))} notEkle={notEkle} notSil={notSil} />
			</div>
		</div>
	);
};

export default App;
