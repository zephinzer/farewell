# farewell

Live [here](https://pensive-albattani-7782c8.netlify.app/)

## Guidelines
* We don't write tests
* We push to master

## Start local server
```
yarn start
```

## Add new card
Add messages to `messages.jsx`:
* For normal text card with a header and a message:
    ```
    {
      header: '"Test header 1"',
      message: "Message contents here",
    },
    ```
* For a photo with alt text, first place it in the images folder and import it as a variable. Then:
    ```
    {
      image: someImg,
      alt: "alt text for the image",
    },
    ```
* For photo card with message, pls write the functionality by yourself
