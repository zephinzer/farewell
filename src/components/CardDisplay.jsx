import React from "react";
import { TextCard } from "./TextCard";
import Masonry from "react-masonry-css";
import { PhotoCard } from "./PhotoCard";
import { PhotoMessageCard } from "./PhotoMessageCard/PhotoMessageCard";

export const CardDisplay = ({ messages }) => {
  const cardComponent = messages.map(({ type, header, message, image, alt }) => {
    switch (type) {
      case "photo-message":
        return <PhotoMessageCard header={header} message={message} imageHref={image} altText={alt} />;
      case "photo":
        return <PhotoCard imageHref={image} altText={alt} />;
      case "text":
        return <Card header={header} message={message} />;
      default:
        return null;
    }
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
