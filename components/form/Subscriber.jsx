"use client";
import axios from "axios";
import React, { useState } from "react";

const Subscriber = () => {
  const [subscriber, setSubscriber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".output-mess");
    await axios
      .post("https://lmdaapi.onrender.com/subscribers", {
        email: subscriber,
      })
      .then(function (response) {
        console.log(response.data);
        formMess.innerHTML =
          "<p class='success'>Inscription à la liste de diffusion validée !</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 3500);
      })
      .catch(function (error) {
        console.log(error);
        formMess.innerHTML =
          "<p class='failed'>Une erreur s'est produite, veuillez réessayer</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 3500);
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
