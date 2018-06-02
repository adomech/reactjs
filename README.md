Get the lastet news from the newsapi.org service.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You need to install on your computer 

```
npm version( 5.6 )
node version( >=8 )

```

## Approach

The frontend is build with ReactJS , with redux (using the create-react-app functionality)

The backend is build with Express using the Express application generator.

### Installing

### Backend

For the backend , go to the backend folder, you will need to setup first the ENV file. 

Copy the sample-env file 

Use this command for copy the file

```
cp .sample-env .env
```

After copy the file you must to setup the port and your API KEY.

```
API_KEY=
PORT=3001
```
After create the file you have to run these commads

```
npm install
```

```
npm start
```
### Frontend

For run the frontend , go to the frontend folder and run the next commands:


```
yarn install
```

```
yarn start
```

## Running the tests


There is only one component tested on the frontend folder

Run this command inside the frontend folder to see the results

```
yarn test
```


## Versioning

V.1.0.0

## Authors

* **Antonio Domech** 
