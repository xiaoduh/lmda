"use client";
import React, { useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";

const Subscriber = () => {
  const [subscriber, setSubscriber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
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
    setLoading(false);
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

export default Subscriber;
