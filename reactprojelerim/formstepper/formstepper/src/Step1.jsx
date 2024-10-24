import React from "react";
import { Field, useFormikContext } from "formik";

const Step1 = () => {
  const { errors, touched } = useFormikContext();

  return (
    <>
      <div className="form-group">
        <label>Ad:</label>
        <Field name="firstName" />
        {errors.firstName && touched.firstName ? (
          <div className="error">{errors.firstName}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Soyad:</label>
        <Field name="lastName" />
        {errors.lastName && touched.lastName ? (
          <div className="error">{errors.lastName}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Doğum Tarihi:</label>
        <Field type="date" name="dob" />
        {errors.dob && touched.dob ? <div className="error">{errors.dob}</div> : null}
      </div>
      <div className="form-group">
        <label>TC Kimlik No:</label>
        <Field name="tc" />
        {errors.tc && touched.tc ? <div className="error">{errors.tc}</div> : null}
      </div>
      <div className="form-group">
        <label>Cinsiyet:</label>
        <div className="radio-group">
          <label>
            <Field type="radio" name="gender" value="Kadın" />
            Kadın
          </label>
          <label>
            <Field type="radio" name="gender" value="Erkek" />
            Erkek
          </label>
        </div>
        {errors.gender && touched.gender ? (
          <div className="error">{errors.gender}</div>
        ) : null}
      </div>
    </>
  );
};

export default Step1;