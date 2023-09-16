"use client";
import React, { useState } from "react";

const Subscriber = () => {
  const [subscriber, setSubscriber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".output-mess");
    setSubscriber("");
    formMess.innerHTML = "<p class='success'>Inscription validée !</p>";
    formMess.innerHTML =
      "<p class='failed'>Une erreur s'est produite, veuillez réessayer</p>";
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Entrez votre email pour recevoir les nouvelles missions"
          autoComplete="disabled"
          required
          value={subscriber}
          onChange={(e) => setSubscriber(e.target.value)}
        />
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

export default Subscriber;
