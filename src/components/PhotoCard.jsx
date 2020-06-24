import React from "react";

export const PhotoCard = ({ image, altText }) => (
  <div class="photo-card">
    <img src={image} alt={altText} width="100%" />
  </div>
);
