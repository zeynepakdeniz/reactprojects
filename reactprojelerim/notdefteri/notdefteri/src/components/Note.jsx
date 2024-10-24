import { MdDeleteForever } from 'react-icons/md';

const Not = ({ id, metin, tarih, notSil }) => {
	return (
		<div className='note'>
			<span>{metin}</span>
			<div className='note-footer'>
				<small>{tarih}</small>
				<MdDeleteForever onClick={() => notSil(id)} className='delete-icon' size='1.3em' />
			</div>
		</div>
	);
};

export default Not;
