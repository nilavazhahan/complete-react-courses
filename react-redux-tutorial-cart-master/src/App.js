/*
import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

//store - store data, think of state
//reducer - function that used to update store
          // takes 2 arguments - state, action
          //state - old state/state before update
          // action - what happened/ what update
          //return updated or old state
// dispatch method - send actions to the store
// actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

import {createStore} from 'redux';
//initial store
const initialStore = {
  count: 0,
  name: 'john'
}

//action
// const DECREASE = 'DECREASE'
// const INCREASE = 'INCREASE'
// const RESET = 'RESET'
// const CHANGE_NAME = 'CHANGE_NAME'

//reducer
function reducer(state, action) {
  // console.log('Hello World');
  console.log({state, action});
  if(action.type === "DECREASE") {
    // state.count = state.count - 1; //Don't mutate
    return {...state, count: state.count - 1, name:'anna' };
  }
  if(action.type === "INCREASE") {
    return {...state, count: state.count + 1 };
  }
  if(action.type === "RESET") {
    return {...state, count: 0 };
  }
  if(action.type === "CHANGE_NAME") {
    return {...state, name: 'Bob' };
  }
  return state;
}

//store
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" })
store.dispatch({ type: "CHANGE_NAME" })
store.dispatch({ type: "RESET" })
store.dispatch({ type: "INCREASE" })
store.dispatch({ type: "INCREASE" })
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

//redux stuff
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

//initial store
const initialStore = {
  totalItemCount: 4,
  cart: cartItems,
  totalPriceAmount: 105,
};
///////////////////////////////////////////////////////
/*
// reducerDefaultState
const store = createStore(reducer);
*/
////////////////////////////////////////////////////
//store
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
