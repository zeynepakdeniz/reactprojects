import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export const Table = ({ satirlar, satirSil, satirDuzenle }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Sayfa</th>
            <th className="expand">Açıklama</th>
            <th>Durum</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {satirlar.map((satir, idx) => {
            const durumMetni =
              satir.durum.charAt(0).toUpperCase() + satir.durum.slice(1);

            return (
              <tr key={idx}>
                <td>{satir.sayfa}</td>
                <td className="expand">{satir.aciklama}</td>
                <td>
                  <span className={`label label-${satir.durum}`}>
                    {durumMetni}
                  </span>
                </td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => satirSil(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => satirDuzenle(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
