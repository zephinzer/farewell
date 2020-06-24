import React from "react";
import { Card } from "./Card";
import Masonry from "react-masonry-css";
import exampleImg from "../images/example.jpg";
import { PhotoCard } from "./PhotoCard";

export const CardDisplay = () => (
  <Masonry
    breakpointCols={3}
    className="card-display"
    columnClassName="card-display__column"
  >
    <Card
      header={"Test header 1"}
      message={
        "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message"
      }
    />
    <Card
      header={"Test header 2"}
      message={
        "Hello, this is a very very very very very very very very very very very very very medium message"
      }
    />
    <PhotoCard imageHref={exampleImg} altText={"example"} />
    <Card
      header={"Test header 3"}
      message={
        "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message"
      }
    />
    <Card
      header={"Test long long long header 4"}
      message={"Hello, this is a very short message"}
    />
    <Card
      header={"Test header 5"}
      message={
        "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very long message"
      }
    />
    <Card
      header={"Test header 1"}
      message={
        "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message"
      }
    />
    <Card
      header={"Test header 2"}
      message={
        "Hello, this is a very very very very very very very very very very very very very medium message"
      }
    />
    <Card
      header={"Test header 3"}
      message={
        "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message"
      }
    />
    <Card
      header={"Test long long long header 4"}
      message={"Hello, this is a very short message"}
    />
    <Card
      header={"Test header 5"}
      message={
        "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very long message"
      }
    />
  </Masonry>
);
