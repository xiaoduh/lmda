"use client";
import React, { useState } from "react";
import axios from "axios";

const FormApply = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".output-mess");
    await axios
      .post("https://lmdaapi.onrender.com/jobs/apply", {
        jobId: "Job_id_to_be_dynamic",
        name: name,
        email: email,
        phone_number: phone,
        motivation: message,
      })
      .then(function (response) {
        console.log(response.data);
        formMess.innerHTML =
          "<p class='success'>Votre candidature pour le poste XXX a bien été envoyée ! 🚀</p>";

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
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
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
        <input
          type="file"
          id="cv"
          name="cv"
          accept=".pdf"
          placeholder="Joindre mon CV"
          value={file}
          onChange={(e) => setFile(e.target.value)}
        />
        <div className="output-message">
          <button type="submit" className="primaryBtn">
            Postuler
          </button>
          <div className="output-mess"></div>
        </div>
      </form>
    </div>
  );
};

export default FormApply;
