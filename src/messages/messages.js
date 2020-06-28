import exampleImg from "../images/example.jpg";
import hive1 from "../images/hive1.jpeg";
import food1 from "../images/food1.jpeg";
import food2 from "../images/food2.jpeg";
import market1 from "../images/market1.jpeg";
import escape from "../images/escape.jpg";
import escape2 from "../images/escape2.jpg";
import infinty from "../images/infinity.jpg";
import deliveroo from "../images/deliveroo.jpg";

/**
 * See README on how to add a new message
 */
export const messages = [
  {
    type: "text",
    header: "Katsuki",
    message: "Espero que nos volvamos a encontrar",
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
    header: "Wilmer",
    message:
      "Hey Joseph, \n" +
      "\n" +
      "Time passed by so fast in MCF, I didn’t realised that it has been almost 2 years since I started the project! \n" +
      "\n" +
      "While our work don’t always overlap, I’m impressed by your dedication to your principles within meetings, and our random yet at times philosophical discussions in real life and online haha.\n" +
      "\n" +
      "Sad to hear that our working relationship is approaching its end, but I hope you don’t be a stranger out there! Wish you all the best and I know you will ace it :)\n" +
      "\n" +
      "Cheers,\n" +
      "Wilmer",
  },
  {
    type: "photo",
    image: infinty,
    alt: "alt-example",
  },
  {
    type: "photo",
    image: deliveroo,
    alt: "something something something Deliveroo",
  },
  {
    type: "text",
    header: "Wynn",
    message:
      "Hi Joseph ,though I've only worked with you for a few months, I would say that I'm glad to have the opportunity. When I first knew about your existence, " +
      "I always perceived you as just another extremely technical person. But after I started to work with you, I realised you're a man of culture as well (insert meme here). " +
      "Thanks for pioneering such a great team culture for us to be a part of and I hope you will continue to work with great (or greater) people wherever you go!",
  },
  {
    type: "text",
    header: "Test header 3",
    message:
      "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message",
  },
  {
    type: "photo",
    image: escape,
    alt: "alt-example",
  },
  {
    type: "text",
    header: "Kai Hong",
    message: 
      "Hey Joseph,\n\n" +
      "Even though we've only been working for a relatively short time together, I'm glad that our paths have crossed. " +
      "Your passion for fighting what you think is right and always questioning the value/purpose of doing things has had an influence on how I perceive a healthy working relationship to look like. " +
      "I'm happy that you have found an awesome opportunity and I'm sure you'll continue to have an impact on others as you grow. All the best! 😃",
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
    type: "photo",
    image: escape2,
    alt: "alt-example",
  },
  {
    type: "text",
    header: "Test long long long header 9",
    message: "Hello, this is a very short message",
  },
  {
    type: "text",
    header: "Mohan",
    message: "Congratulations for the new job. " +
        "It was nice working with you, it changed my attitude on how we should look at the requirements. " +
        "I remember my interview time, I wasn't that confidant after the first round, but your attitude and smile helped to reduce my stress for the 2nd round. " +
        "You were and will always be an invaluable member of Jobseeker. " +
        "Continue to raise your concerns😉!!!",
  },
  {
    type: "text",
    header: "Test header 10",
    message:
      "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very long message",
  },
  {
    type: "photo-message",
    image: exampleImg,
    alt: "alt-example",
    header: "Test long long long header 11 for photo card message",
    message:
      "Hello, this is a very very very very very very very very very very very very very very very very very very very very very very very very very very long message",
  },
];
