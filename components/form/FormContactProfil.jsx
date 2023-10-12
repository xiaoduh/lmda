"use client";
import React, { useState } from "react";
import axios from "axios";

const FormContactProfil = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".output-mess");
    await axios
      .post("http://localhost:5000/users/contact", {
        profilId: "id",
        subject: subject,
        email: email,
        phone_number: phone,
        context: message,
      })
      .then(function (response) {
        console.log(response.data);
        formMess.innerHTML =
          "<p class='success'>Votre demande a bien été envoyée ! 🚀</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 3500);
      })
      .catch(function (error) {
        console.log(error);
        formMess.innerHTML =
          "<p class='failed'>Une erreur s'est produite, veuillez réessayer ❌</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 3500);
      });
    setSubject("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          subject="subject"
          placeholder="Objet de votre prise de contact"
          required
          autoComplete="disabled"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          autoComplete="disabled"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Votre numéro de téléphone"
          autoComplete="disabled"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Le contexte de votre prise de contact"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="output-message">
          <button type="submit" className="primaryBtn">
            Envoyer
          </button>
          <div className="output-mess"></div>
        </div>
      </form>
    </div>
  );
};

export default FormContactProfil;
