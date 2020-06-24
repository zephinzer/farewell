import React from "react";
import { TextCard } from "./TextCard";
import Masonry from "react-masonry-css";
import { PhotoCard } from "./PhotoCard";

export const CardDisplay = ({ messages }) => {
  const cardComponent = messages.map(({ type, header, message, image, alt }) =>
    type === "photo" ? (
      <PhotoCard image={image} altText={alt} />
    ) : (
      <TextCard header={header} message={message} />
    )
  );

  return (
    <Masonry
      breakpointCols={3}
      className="card-display"
      columnClassName="card-display__column"
    >
      {cardComponent}
    </Masonry>
  );
};
