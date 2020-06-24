import React from "react";

export const Card = ({ header, message }) => (
  <div class="card">
    <h2>{header}</h2>
    <p>{message}</p>
  </div>
);
