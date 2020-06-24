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
Add in `CardDisplay`. Or anyone wants to help ingest from JSON file :see_no_evil:
* For normal text card with a header and a message, use `Card`
* For photo card, use `PhotoCard`. As I am lazy to optimise, you have to add your image to the `src/images` folder, then import it in `CardDisplay` and pass to `PhotoCard` as `imageHref`.
* For photo card with message, pls write the functionality by yourself
