# Stellar Burgers. Fresh space burgers on request 24/7

## Available live

at [https://stellarburgers.space/](https://stellarburgers.space/).

## React-burger educational project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
and runs with [Yandex.Practicum components](https://practicum.yandex.ru/).

This is a front-end side of the Stellar Burger site, where the customer
can order a custom burger in the Stellar burgers cafe.

## Technologies used

- React
- React DnD
- Redux
- Websockets

## Configuration

There is a configuration file located at `src/config/config.ts`.

The structure of this file is the following:

```
export const oSettings = {
    sAPIBaseURL : "The basic path to the API endpoint, without trailing slash"
    oAPIURIS : { sIngredients : "URI to request available ingredients list",
                 sOrders : "URI to submit orders",
                 sForgotPassword : "URI to submit forgot password requests",
                 sResetPassword : "URI to submit reset password requests",
                 sRegisterUser : "URI to sumbit registration requests",
                 sRefreshToken : "URI to submit refresh token requests",
                 sUserData : "URI to request the current user details",
                 sLogin : "URI to request login",
                 sExit : "URI to request timeout"} as const,
    oCookiesLifetime : { nRefresh : <Refresh token cookie lifetime>,
                         nAccess : <Accesss token cookie lifetime> } as const,
    oAPIWS : { sAllOrders : "Full orders list websocket URL",
               sUserOrders : "Current user orders list websocket URL"}
} as const;
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run verbose-test`

Launch the Jest tests with --verbose key.

### `npm run cypress`

Open the cypress app with e2e tests.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
