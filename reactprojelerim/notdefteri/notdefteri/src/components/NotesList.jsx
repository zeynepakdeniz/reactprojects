import Not from './Note';
import NotEkle from './AddNote';

const NotListesi = ({ notlar, notEkle, notSil }) => {
	return (
		<div className='notes-list'>
			{notlar.map((not) => (
				<Not id={not.id} metin={not.metin} tarih={not.tarih} notSil={notSil} />
			))}
			<NotEkle notEkle={notEkle} />
		</div>
	);
};

export default NotListesi;
