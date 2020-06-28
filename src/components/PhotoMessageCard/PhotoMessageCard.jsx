import React from "react";
import "./PhotoMessageCard.css";

export const PhotoMessageCard = ({ image, altText, header, message, index }) => (
  <div className="photo-message-card">
    <img src={image} alt={altText} width="100%" />
    <div class="photo-message">
      {!!header && <h2>{header}</h2>}
      <p class="photo-message-card-text">{message}</p>
      <h1 class="card-index">{index}</h1>
    </div>
  </div>
);
