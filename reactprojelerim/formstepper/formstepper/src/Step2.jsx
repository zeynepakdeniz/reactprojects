import React from "react";
import { Field, useFormikContext } from "formik";

const Step2 = () => {
  const { errors, touched } = useFormikContext();

  return (
    <>
      <div className="form-group">
        <label>Telefon No:</label>
        <Field name="phone" />
        {errors.phone && touched.phone ? <div className="error">{errors.phone}</div> : null}
      </div>
      <div className="form-group">
        <label>Yaşadığı Şehir:</label>
        <Field name="city" />
        {errors.city && touched.city ? <div className="error">{errors.city}</div> : null}
      </div>
      <div className="form-group">
        <label>E-posta:</label>
        <Field name="email" type="email" />
        {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
      </div>
    </>
  );
};

export default Step2;