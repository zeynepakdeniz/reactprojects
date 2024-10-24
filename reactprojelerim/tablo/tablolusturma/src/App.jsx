import { useState } from "react";

import "./App.css";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";

function App() {
  const [modalAcik, setModalAcik] = useState(false);
  const [satirlar, setSatirlar] = useState([
    {
      sayfa: "Ana Sayfa",
      aciklama: "Bu, web sitesinin ana sayfasıdır",
      durum: "canlı",
    },
    {
      sayfa: "Hakkımızda",
      aciklama: "Bu sayfada şirket hakkında detaylar yer alıyor",
      durum: "taslak",
    },
    {
      sayfa: "Fiyatlandırma",
      aciklama: "Farklı abonelikler için fiyatlar",
      durum: "hata",
    },
  ]);
  const [duzenlenecekSatir, setDuzenlenecekSatir] = useState(null);

  const handleSatirSil = (hedefIndex) => {
    setSatirlar(satirlar.filter((_, idx) => idx !== hedefIndex));
  };

  const handleSatirDuzenle = (idx) => {
    setDuzenlenecekSatir(idx);

    setModalAcik(true);
  };

  const handleSubmit = (yeniSatir) => {
    duzenlenecekSatir === null
      ? setSatirlar([...satirlar, yeniSatir])
      : setSatirlar(
          satirlar.map((guncelSatir, idx) => {
            if (idx !== duzenlenecekSatir) return guncelSatir;

            return yeniSatir;
          })
        );
  };

  return (
    <div className="App">
      <Table
        satirlar={satirlar}
        satirSil={handleSatirSil}
        satirDuzenle={handleSatirDuzenle}
      />
      <button onClick={() => setModalAcik(true)} className="btn">
        Ekle
      </button>
      {modalAcik && (
        <Modal
          modalKapat={() => {
            setModalAcik(false);
            setDuzenlenecekSatir(null);
          }}
          onSubmit={handleSubmit}
          varsayılanDeger={duzenlenecekSatir !== null && satirlar[duzenlenecekSatir]}
        />
      )}
    </div>
  );
}

export default App;
