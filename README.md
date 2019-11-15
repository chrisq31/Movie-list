This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Zone Movies
Link to the task: https://zone.github.io/frontend/movie-listing
quinn31
dipMovie31!
https://www.themoviedb.org/u/quinn31

Using the TMDb API display a list of now showing movies allowing the user to filter by genre and rating. Don't worry about pagination, the first page is fine.

//input -now showing

https://api.themoviedb.org/3/movie/now_playing?api_key=c72352499d66ee87c33c6c30493a8e7e&language=en-US&page=1
https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

API Key (v3 auth)
c72352499d66ee87c33c6c30493a8e7e

Example API Request
https://api.themoviedb.org/3/movie/550?api_key=c72352499d66ee87c33c6c30493a8e7e

API Read Access Token (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzIzNTI0OTlkNjZlZTg3YzMzYzZjMzA0OTNhOGU3ZSIsInN1YiI6IjVkY2JlN2Y1ZTI2M2JiMDAxMzcwMjE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KRajZKTp-ec7V_t123KlB_6flJCDco6j2iVd8ApCuOc

//request
https://api.themoviedb.org/3/movie/now_playing?api_key=c72352499d66ee87c33c6c30493a8e7e&language=en-US&page=1

// response
Display a list of movies, each showing their title, genres and poster image.
The movies should be ordered by popularity (most popular first - popularity property).
Movies should be filterable by multiple genres, the user should have the ability to toggle movies depending on all of its assigned genres. For example if 'Action' and 'Drama' genres are selected listed movies must have both 'Action' and 'Drama' genres.
Movies should also be filterable by their rating (vote_average property). i.e If rating was set to 5, you would expect to see all movies with a rating of 5 or higher.
The input API's should only be called once.