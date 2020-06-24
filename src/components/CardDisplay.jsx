import React from "react";
import { Card } from "./Card";
import Masonry from "react-masonry-css";
import { PhotoCard } from "./PhotoCard";
import exampleImg from "../images/example.jpg";

export const CardDisplay = ({ messages }) => {
  const cardComponent = messages.map((user, i) => {
    const { header, message, image, alt } = messages[i];
    if (image !== undefined) {
      return <PhotoCard imageHref={exampleImg} altText={alt} />;
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
