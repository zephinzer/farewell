import exampleImg from "../images/example.jpg";

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
