import React, { useState } from "react";
import { Formik, Form } from "formik";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Button } from "@mui/material";
import * as Yup from "yup";

const validationSchemas = [
  Yup.object().shape({
    firstName: Yup.string().required("Ad zorunludur"),
    lastName: Yup.string().required("Soyad zorunludur"),
    dob: Yup.date().required("Doğum tarihi zorunludur"),
    tc: Yup.string()
      .matches(/^[0-9]{11}$/, "TC kimlik numarası 11 haneli olmalı ve sadece rakamlardan oluşmalıdır")
      .required("TC kimlik numarası zorunludur"),
    gender: Yup.string().required("Cinsiyet seçimi zorunludur"),
  }),
  Yup.object().shape({
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Telefon numarası 10 haneli olmalı ve sadece rakamlardan oluşmalıdır")
      .required("Telefon numarası zorunludur"),
    city: Yup.string().required("Şehir zorunludur"),
    email: Yup.string()
      .email("Geçerli bir e-posta adresi girin")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'geçerli email adresi gir'
      )
      .required("E-posta adresi zorunludur"),
  }),
  Yup.object().shape({
    hobbies: Yup.array()
      .min(1, "En az bir hobi seçmelisiniz")
      .required("Hobi seçimi zorunludur"),
  }),
];

const stepTitles = ["Kişisel Bilgiler", "İletişim Bilgileri", "Hobiler"];

const StepperComponent = () => {
  const [step, setStep] = useState(0);

  
  const initialValues = {
    firstName: "",
    lastName: "",
    dob: "",
    tc: "",
    gender: "",
    phone: "",
    city: "",
    email: "",
    hobbies: [], 
  };

  const handleNext = (values) => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      console.log("Form Submitted", values);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemas[step]}
      onSubmit={handleNext}
    >
      {({ values }) => (
        <Form>
          {}
          <h2>{stepTitles[step]}</h2>

          {}
          {step === 0 && <Step1 />}
          {step === 1 && <Step2 />}
          {step === 2 && <Step3 />}

          {}
          <div style={{ marginTop: "20px" }}>
            {step > 0 && (
              <Button onClick={handleBack} type="button">
                Geri
              </Button>
            )}
            <Button type="submit">{step === 2 ? "Gönder" : "İleri"}</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StepperComponent;