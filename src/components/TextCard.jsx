import React from "react";

export const TextCard = ({ header, message, rotation, index }) => (
  <div class="card" style={{ transform: "rotate(" + rotation + "deg)" }}>
    <p class="card-content">{message}</p>
    {!!header && <h2 class="card-author">{header}</h2>}
    <h1 class="card-index">{index}</h1>
  </div>
);
