import React from "react";

export const PhotoCard = ({ imageHref, altText }) => (
  <div class="photo-card">
    <img src={imageHref} alt={altText} width="100%" />
  </div>
);
