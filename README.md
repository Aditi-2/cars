# CARS

### Getting started

0. Clone or download the repo and from inside the repo/folder run the below commands.
1. `yarn install` to install the dependencies
2. `yarn dev` to start the api server and react app. This should launch the app in dev mode and also open it in the new tab but if that does not happen for you try visiting `http://localhost:3000`

### Notes

0. Clicking on the serach box lists the available options and user can select from there and also filter the list.
1. If there is an error (from api server) an error is shown at the bottom of the page.
2. When there is an error the user can re-trigger the api call by clicking the search button next to each autocomplete box.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn server`

Runs the mock api server

### `yarn dev`

Runs `server` and `start` script in parallel

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
