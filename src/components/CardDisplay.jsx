import React from "react";
import { TextCard } from "./TextCard";
import Masonry from "react-masonry-css";
import { PhotoCard } from "./PhotoCard";
import { PhotoMessageCard } from "./PhotoMessageCard/PhotoMessageCard";

export const CardDisplay = ({ messages }) => {
  const cardComponent = messages.map(({ type, header, message, image, alt }) => {
    switch (type) {
      case "photo-message":
        return <PhotoMessageCard header={header} message={message} image={image} altText={alt} />;
      case "photo":
        return <PhotoCard image={image} altText={alt} rotation={(Math.random() - 0.5) * 7}/>;
      case "text":
        return <TextCard header={header} message={message} rotation={(Math.random() - 0.5) * 4}/>;
      default:
        return null;
    }
  });


  
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="card-display"
      columnClassName="card-display__column"
    >
      {cardComponent}
    </Masonry>
  );
};
