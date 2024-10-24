import React, { useState, useEffect } from "react";
import "./App.css";

const OYUNCU_X = "X";
const OYUNCU_O = "O";
const OyunDurumu = {
  devam: "devam",
  oyuncuXKazandı: "X Kazandı",
  oyuncuOKazandı: "O Kazandı",
  beraberlik: "Beraberlik",
};

const kazananKombinasyonlar = [
  [0, 1, 2], // sıra 1
  [3, 4, 5], // sıra 2
  [6, 7, 8], // sıra 3
  [0, 3, 6], // sütun 1
  [1, 4, 7], // sütun 2
  [2, 5, 8], // sütun 3
  [0, 4, 8], // çapraz 1
  [2, 4, 6], // çapraz 2
];

function XOX() {
  const [kareler, setKareler] = useState(Array(9).fill(null));
  const [oyuncuSira, setOyuncuSira] = useState(OYUNCU_X);
  const [oyunDurumu, setOyunDurumu] = useState(OyunDurumu.devam);

  const kareTiklama = (index) => {
    if (kareler[index] !== null || oyunDurumu !== OyunDurumu.devam) return;

    const yeniKareler = [...kareler];
    yeniKareler[index] = oyuncuSira;
    setKareler(yeniKareler);

    setOyuncuSira(oyuncuSira === OYUNCU_X ? OYUNCU_O : OYUNCU_X);
  };

  const kazananKontrol = (kareler) => {
    for (let kombinasyon of kazananKombinasyonlar) {
      const [a, b, c] = kombinasyon;
      if (kareler[a] && kareler[a] === kareler[b] && kareler[a] === kareler[c]) {
        return kareler[a] === OYUNCU_X ? OyunDurumu.oyuncuXKazandı : OyunDurumu.oyuncuOKazandı;
      }
    }

    return kareler.every((kare) => kare !== null) ? OyunDurumu.beraberlik : OyunDurumu.devam;
  };

  useEffect(() => {
    const sonuc = kazananKontrol(kareler);
    if (sonuc !== OyunDurumu.devam) {
      setOyunDurumu(sonuc);
    }
  }, [kareler]);

  const oyunuSifirla = () => {
    setKareler(Array(9).fill(null));
    setOyuncuSira(OYUNCU_X);
    setOyunDurumu(OyunDurumu.devam);
  };

  return (
    <div className="oyun">
      <h1>XOX Oyunu</h1>
      <div className="tahta">
        {kareler.map((deger, index) => (
          <div key={index} className="kare" onClick={() => kareTiklama(index)}>
            {deger}
          </div>
        ))}
      </div>
      <div className="oyun-bilgisi">
        {oyunDurumu === OyunDurumu.devam ? (
          <p>Sıradaki oyuncu: {oyuncuSira}</p>
        ) : (
          <p>{oyunDurumu}</p>
        )}
      </div>
      {oyunDurumu !== OyunDurumu.devam && (
        <button className="sifirla-buton" onClick={oyunuSifirla}>
          Yeniden Oyna
        </button>
      )}
    </div>
  );
}

export default XOX;
