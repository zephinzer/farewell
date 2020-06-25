import React from "react";

export const TextCard = ({ header, message }) => (
  <div class="card">
    <p class="card-content">{message}</p>
    {!!header && <h2 class="card-author">- {header}</h2>}
  </div>
);
