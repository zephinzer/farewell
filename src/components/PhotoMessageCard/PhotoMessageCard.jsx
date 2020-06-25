import React from "react";
import "./PhotoMessageCard.css";

export const PhotoMessageCard = ({ imageHref, altText, header, message }) => (
  <div className="photo-message-card">
    <img src={imageHref} alt={altText} width="100%" />
    <div class="photo-message">
      {!!header && <h2>{header}</h2>}
      <p class="photo-message-card-text">{message}</p>
    </div>
  </div>
);
