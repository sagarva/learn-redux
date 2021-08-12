import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';


//Store well the store is a place to store data as 

//action
const increment =()=> {
  return{
    type:"INCREMENT"
  }
}
const decrement =()=> {
  return{
    type:"DECREMENT"
  }
}
//reducer will tell us what is supposed to happen when we perform an action

const counter =( state=0, action) => {
  switch(action.type){
    case "INCREMENT" :
      return state+1;
    case "DECREMENT" :
      return state-1;
      }
}
//store
let store = createStore(counter)
//to display our counter in the console window
store.subscribe(() => console.log(store.getState())); //we are login the current state of our store
//dispatcher
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

