import React from "react";
import { Field, useFormikContext } from "formik";

const hobbiesOptions = ["Spor", "Kitap Okumak", "Müzik Dinlemek", "Resim Yapmak", "Dans Etmek"];

const Step3 = () => {
  const { values, errors, touched } = useFormikContext();

  return (
    <>
      <div className="form-group">
        <label>Hobiler:</label>
        {hobbiesOptions.map((hobby, index) => (
          <div key={index}>
            <label>
              <Field type="checkbox" name="hobbies" value={hobby} />
              {hobby}
            </label>
          </div>
        ))}
        {errors.hobbies && touched.hobbies ? (
          <div className="error">{errors.hobbies}</div>
        ) : null}
      </div>
    </>
  );
};

export default Step3;