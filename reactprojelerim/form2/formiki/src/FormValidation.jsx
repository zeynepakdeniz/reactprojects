import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import "./App.css";

const validationSchema = Yup.object({
  firstName: Yup.string().required('Ad gerekli'),
  lastName: Yup.string().required('Soyad gerekli'),
  tc: Yup.string()
    .matches(/^\d{0,11}$/, 'TC kimlik numarası sadece rakam içermeli')
    .length(11, 'TC kimlik numarası 11 haneli olmalıdır')
    .required('TC kimlik numarası gerekli'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Telefon numarası sadece rakam içermeli ve 10 haneli olmalıdır')
    .required('Telefon numarası gerekli'),
  birthDate: Yup.date().required('Doğum tarihi gerekli'),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'geçerli email adresi gir'
      )
      .required('email gerekli'),

  city: Yup.string().required('Şehir gerekli'),
  confirm: Yup.bool().oneOf([true], 'Bilgileri doğru olduğuna dair onay vermelisiniz')
});

const FormValidation = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        tc: '',
        phoneNumber: '',
        birthDate: '',
        city: '',
        email: '',
        confirm: false
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form values:', values);
        navigate('/FormGonderildi'); 
      }}
    >
      {({ isSubmitting, isValid, dirty, touched }) => (
        <Form>
          <div>
            <label>Ad: </label>
            <Field name="firstName" type="text" />
            {touched.firstName && <ErrorMessage name="firstName" component="div" />}
          </div>

          <div>
            <label>Soyad: </label>
            <Field name="lastName" type="text" />
            {touched.lastName && <ErrorMessage name="lastName" component="div" />}
          </div>

          <div>
            <label>TC Kimlik Numarası: </label>
            <Field name="tc" type="text" />
            {touched.tc && <ErrorMessage name="tc" component="div" />}
          </div>

          <div>
            <label>Telefon Numarası: </label>
            <Field name="phoneNumber" type="text" />
            {touched.phoneNumber && <ErrorMessage name="phoneNumber" component="div" />}
          </div>

          <div>
            <label>Doğum Tarihi: </label>
            <Field name="birthDate" type="date" />
            {touched.birthDate && <ErrorMessage name="birthDate" component="div" />}
          </div>

          <div>
            <label>email: </label>
            <Field name="email" type="text" />
            {touched.email && <ErrorMessage name="email" component="div" />}
          </div>

          <div>
            <label>Şehir: </label>
            <Field name="city" type="text" />
            {touched.city && <ErrorMessage name="city" component="div" />}
          </div>

          <div>
            <label>
              <Field name="confirm" type="checkbox" />
              Bilgilerin doğru olduğunu onaylıyorum.
            </label>
            {touched.confirm && <ErrorMessage name="confirm" component="div" />}
          </div>

          <button type="submit" disabled={!(isValid && dirty)}>
            Gönder
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormValidation;
