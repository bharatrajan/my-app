A simple react app to display ISP ranking. This project uses

- Yarn 
- Jest
- node js
- react 16.2
- create-react-app


## To run
- Clone the project
- cd `my-app`
- `npm i`
- `yarn start`
This will start the app at port 3000.

##To build
- Clone the project
- cd `my-app`
- `npm i`
- `yarn build`
- `node mockserver.js`

Final step rendered the app in port 3030. Please any port other than 3000 for the app to make AJAX Call to get the mock json.
Once the app is build any other simple http server (eg. python) can be used to render the project. 

Note : Build distination is set to `./build` so static files rendering should be rendered from `./build` directory after the app is build
