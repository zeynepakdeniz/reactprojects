import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function FormValidation() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    birthDate: "",
    phoneNumber: "",
    email: "",
    city: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    let errors = {};

   
    if (!formValues.firstName) {
      errors.firstName = "Ad zorunludur";
    } else if (formValues.firstName.length < 2 || formValues.firstName.length > 50) {
      errors.firstName = "Ad en az 2, en fazla 50 karakter olmalıdır";
    }

    
    if (!formValues.lastName) {
      errors.lastName = "Soyad zorunludur";
    } else if (formValues.lastName.length < 2 || formValues.lastName.length > 50) {
      errors.lastName = "Soyad en az 2, en fazla 50 karakter olmalıdır";
    }

    
    if (!formValues.idNumber) {
      errors.idNumber = "TC Kimlik No zorunludur";
    } else if (!/^[0-9]{11}$/.test(formValues.idNumber)) {
      errors.idNumber = "TC kimlik numarası 11 haneli olmak zorundadır";
    }

  
    if (!formValues.birthDate) {
      errors.birthDate = "Doğum Tarihi zorunludur";
    }

    if (!formValues.phoneNumber) {
      errors.phoneNumber = "Telefon Numarası zorunludur";
    } else if (!/^[0-9]{10}$/.test(formValues.phoneNumber)) {
      errors.phoneNumber = "Telefon numarası 10 haneli olmak zorundadır";
    }

    
    if (!formValues.email) {
      errors.email = "E-posta zorunludur";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Geçerli bir e-posta adresi giriniz";
    }

   
    if (!formValues.city) {
      errors.city = "Şehir zorunludur";
    } else if (formValues.city.length < 2) {
      errors.city = "Şehir en az 2 karakter olmalıdır";
    }

   
    if (!formValues.acceptTerms) {
      errors.acceptTerms = "Şartları kabul etmelisiniz";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/Formgonderme");
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Ad:</label>
            <input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>
          <div>
            <label>Soyad:</label>
            <input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div>
            <label>TC Kimlik No:</label>
            <input
              type="text"
              name="idNumber"
              value={formValues.idNumber}
              onChange={handleChange}
            />
            {errors.idNumber && <p>{errors.idNumber}</p>}
          </div>
          <div>
            <label>Doğum Tarihi:</label>
            <input
              type="date"
              name="birthDate"
              value={formValues.birthDate}
              onChange={handleChange}
            />
            {errors.birthDate && <p>{errors.birthDate}</p>}
          </div>
          <div>
            <label>E-posta:</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label>Telefon Numarası:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
          </div>
          <div>
            <label>Yaşadığınız Şehir:</label>
            <input
              type="text"
              name="city"
              value={formValues.city}
              onChange={handleChange}
            />
            {errors.city && <p>{errors.city}</p>}
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formValues.acceptTerms}
                onChange={handleChange}
              />
              Bilgilerimin doğru olduğunu kabul ediyorum
            </label>
            {errors.acceptTerms && <p>{errors.acceptTerms}</p>}
          </div>
          <button type="submit" disabled={!formValues.acceptTerms}>
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormValidation;
