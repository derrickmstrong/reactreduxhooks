# React Redux w/Hooks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Step by Step

In the project directory, you can run:

### `npx create-react-app .`

Start new CRA project in Terminal

### `Cleanup files`

Once CRA installation is complete, remove default src directory and replace with clean index.js and App.js files

### `npm i redux react-redux redux-thunk`

Install all dependencies

### `Setup store file structure`

store
    actions
        index.js
    actionTypes
        index.js
    reducers
        accountReducer.js
        index.js (rootreducer)
index.js (export * as actionCreators from ./actions)
store.js

### Create action types


### Create individual reducers


### Combine multiple reducers (rootReducer)


### Update store by adding action creators


### Create store.js


### Apply Redux Thunk middleware to store.js


### Wrap store around app with Provider at root index.js


### Test/Access state with useSelector


### Test/Dispatch action creators with useDispatch and bindActionCreators 


## Congrats! You got yourself a React/Redux app with Hooks.
