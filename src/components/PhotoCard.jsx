import React from "react";

export const PhotoCard = ({ image, altText, rotation }) => (
  <div class="photo-card" style={{ transform: "rotate(" + rotation + "deg)" }}>
    <img src={image} alt={altText} width="100%" />
  </div>
);
