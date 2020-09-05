import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import { createStore } from "redux"

const initialState ={
  name: "",
  age:0
}

export const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      console.log("get name: " + action.payload.name)
      return {
        ...state,
        name: action.payload.name
      };
    case "SET_AGE":
      console.log("get age: " + action.payload.age)
      return {
        ...state,
        age: JSON.parse(action.payload.age)
      }
    default:
      return state;
  }
}

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()
