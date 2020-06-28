import React from "react";

export const TextCard = ({ header, message, rotation}) => (
  <div class="card" style={{transform: 'rotate('+ rotation + 'deg)'}}>
    <p class="card-content">{message}</p>
    {!!header && <h2 class="card-author">{header}</h2>}
  </div>
);

