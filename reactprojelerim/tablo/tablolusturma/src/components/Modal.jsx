import React, { useState } from "react";

export const Modal = ({ modalKapat, onSubmit, varsayılanDeger }) => {
  const [formDurumu, setFormDurumu] = useState(
    varsayılanDeger || {
      sayfa: "",
      aciklama: "",
      durum: "canlı",
    }
  );
  const [hatalar, setHatalar] = useState("");

  const formDogrula = () => {
    if (formDurumu.sayfa && formDurumu.aciklama && formDurumu.durum) {
      setHatalar("");
      return true;
    } else {
      let hataAlanlari = [];
      for (const [key, value] of Object.entries(formDurumu)) {
        if (!value) {
          hataAlanlari.push(key);
        }
      }
      setHatalar(hataAlanlari.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormDurumu({ ...formDurumu, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formDogrula()) return;

    onSubmit(formDurumu);

    modalKapat();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") modalKapat();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="sayfa">Sayfa</label>
            <input name="sayfa" onChange={handleChange} value={formDurumu.sayfa} />
          </div>
          <div className="form-group">
            <label htmlFor="aciklama">Açıklama</label>
            <textarea
              name="aciklama"
              onChange={handleChange}
              value={formDurumu.aciklama}
            />
          </div>
          <div className="form-group">
            <label htmlFor="durum">Durum</label>
            <select
              name="durum"
              onChange={handleChange}
              value={formDurumu.durum}
            >
              <option value="canlı">Canlı</option>
              <option value="taslak">Taslak</option>
              <option value="hata">Hata</option>
            </select>
          </div>
          {hatalar && <div className="error">{`Lütfen şu alanları doldurun: ${hatalar}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};
