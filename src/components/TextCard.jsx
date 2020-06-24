import React from "react";

export const TextCard = ({ header, message }) => (
  <div class="card">
    {!!header && <h2>{header}</h2>}
    <p>{message}</p>
  </div>
);
