import React from "react";

export const PhotoCard = ({ image, altText, rotation, index }) => (
  <div class="photo-card" style={{ transform: "rotate(" + rotation + "deg)" }}>
    <img src={image} alt={altText} width="100%" />
    <h1 class="card-index">{index}</h1>
  </div>
);
