import { useState } from 'react';

const NotEkle = ({ notEkle }) => {
	const [notMetni, setNotMetni] = useState('');
	const karakterSiniri = 200;

	const handleChange = (event) => {
		if (karakterSiniri - event.target.value.length >= 0) {
			setNotMetni(event.target.value);
		}
	};

	const kaydetClick = () => {
		if (notMetni.trim().length > 0) {
			notEkle(notMetni);
			setNotMetni('');
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Not eklemek için yazın...'
				value={notMetni}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>{karakterSiniri - notMetni.length} Kalan</small>
				<button className='save' onClick={kaydetClick}>Kaydet</button>
			</div>
		</div>
	);
};

export default NotEkle;
