# farewell

Live [here](https://pensive-albattani-7782c8.netlify.app/)

## Guidelines

- We don't write tests
- We push to master

## Start local server

```
yarn start
```

## Add new card

Add messages to `src/messages/messages.js`:

- For normal text card with a header and a message:
  ```javascript
  {
   type: "text",
   header: "some header",    // optional
   message: "some message"
  }
  ```
- For a photo with alt text, first place it in the images folder and import it as a variable (e.g. `someImg`). Then:
  ```javascript
  {
    type: "photo",
    image: someImg,
    alt: "alt text for the image",
  },
  ```
- For photo card with message, first place it in the images folder and import it as a variable. Then:
  ```javascript
  {
    header: "some header", // optional
    message: "some message",
    image: someImg,
    alt: "alt text for the image",
  }
  ```
