"use client";
import React, { useState } from "react";
import axios from "axios";

const FormApply = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formMess = document.querySelector(".output-mess");
    await axios
      .post("/api/apply", {
        jobID: id,
        name: name,
        email: email,
        phone_number: phone,
        motivation: message,
      })
      .then(function (response) {
        console.log(response.data);
        formMess.innerHTML =
          "<p class='success'>Votre candidature a bien été envoyée ! 🚀</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 6500);
      })
      .catch(function (error) {
        console.log(error);
        formMess.innerHTML =
          "<p class='failed'>Une erreur s'est produite, veuillez réessayer ❌</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 6500);
      });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setLoading(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          required
          autoComplete="disabled"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="disabled"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Téléphone"
          autoComplete="disabled"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Pourquoi vous ?"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {/* <input
          type="file"
          id="cv"
          name="cv"
          accept=".pdf"
          placeholder="Joindre mon CV"
          value={file}
          onChange={(e) => setFile(e.target.value)}
        /> */}
        <div className="output-message">
          {!loading ? (
            <button type="submit" className="primaryBtn">
              Envoyer
            </button>
          ) : (
            <button className="primaryBtn">Chargement....</button>
          )}
          <div className="output-mess"></div>
        </div>
      </form>
    </div>
  );
};

export default FormApply;
