"use client";
import React, { useState } from "react";
import axios from "axios";

const Subscriber = () => {
  const [subscriber, setSubscriber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".output-mess");
    await axios
      .post("/api/subscriber", {
        email: subscriber,
      })
      .then(function (response) {
        formMess.innerHTML =
          "<p class='success'>Inscription à la liste de diffusion validée !</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 6500);
      })
      .catch(function (error) {
        formMess.innerHTML =
          "<p class='failed'>Une erreur s'est produite, veuillez réessayer</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 6500);
      });
    setSubscriber("");
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
