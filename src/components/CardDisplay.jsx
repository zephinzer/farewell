import React from "react";
import { Card } from "./Card";
import Masonry from "react-masonry-css";
import { PhotoCard } from "./PhotoCard";

export const CardDisplay = ({ messages }) => {
  const cardComponent = messages.map(({header, message, image, alt}) => {
    if (image) {
      return <PhotoCard imageHref={image} altText={alt} />;
    }

    return <Card header={header} message={message} />;
  });

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
