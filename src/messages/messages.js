import exampleImg from "../images/example.jpg";
import hive1 from "../images/hive1.jpeg";
import food1 from "../images/food1.jpeg";
import food2 from "../images/food2.jpeg";
import market1 from "../images/market1.jpeg";

/**
 * Adding a new message!!!
 * 
 * If you are trying to add a TextCard:
 *  {
 *    type: "text",
 *    header: "some header",    // optional
 *    message: "some message"
 *  }
 *
 * If you are trying to add a PhotoCard:
 *  {
 *    type: "photo",
 *    image: (import from your image file),
 *    alt: "some alt text"
 *  }
 */
export const messages = [
  {
    type: "text",
    header: "Katsuki",
    message: "Espero que nos volvamos a encontrar"
  },
  {
    type: "photo",
    image: food1,
    alt: "hahaha i could write an alt text IF I KNEW WHAT WAS GOING ON",
  },
  {
    type: "photo",
    image: food2,
    alt: "hahaha i could write an alt text IF I KNEW WHAT WAS GOING ON",
  },
  {
    type: "photo",
    image: hive1,
    alt: "hahaha i could write an alt text IF I KNEW WHAT WAS GOING ON",
  },
  {
    type: "photo",
    image: market1,
    alt: "hahaha i could write an alt text IF I KNEW WHAT WAS GOING ON",
  },
  {
    type: "text",
    header: '"Test header 1"',
    message:
      "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message",
  },
  {
    type: "text",
    header: "Test header 2",
    message:
      "Hello, this is a very very very very very very very very very very very very very medium message",
  },
  {
    type: "text",
    header: "Test header 3",
    message:
      "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message",
  },
  {
    type: "text",
    header: "Test long long long header 4",
    message: "Hello, this is a very short message",
  },
  {
    type: "text",
    header: "Test header 5",
    message:
      "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very long message",
  },
  {
    type: "photo",
    image: exampleImg,
    alt: "alt-example",
  },
  {
    type: "text",
    header: "Test header 6",
    message:
      "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very long message",
  },
  {
    type: "text",
    message:
      "Hello, this is a very very very very very very very very very very very very very medium message with no header",
  },
  {
    type: "text",
    header: "Test header 7",
    message:
      "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very long message",
  },
  {
    type: "text",
    header: '"Test header 8"',
    message:
      "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message",
  },
  {
    type: "text",
    header: "Test long long long header 9",
    message: "Hello, this is a very short message",
  },
  {
    type: "text",
    header: "Test header 10",
    message:
      "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very long message",
  },
];
