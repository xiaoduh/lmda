"use client";
import React, { useState } from "react";

const FormJoinUs = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".output-mess");
    formMess.innerHTML = "<p class='success'>connected</p>";
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
          placeholder="Objet"
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
          placeholder="Qu'avez-vous retenu de notre modèle ? Qu'est-ce qui vous intéresse dans celui-ci ?"
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

export default FormJoinUs;
