import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_CARTITEM_COUNT,
} from "./actions.js";

//////////////////////////////////////////////////////////
/*
// reducerDefaultState
// items
// import cartItems from "./cart-items";

// //initial store
// const initialStore = {
//   totalItemCount: 4,
//   cart: cartItems,
//   totalPriceAmount: 105,
// };

// function reducer(state = initialStore, action) {...}
*/
///////////////////////////////////////////////////////////

function reducer(state, action) {
  // switch (action.type) {
  //   case CLEAR_CART:
  //     return { ...state, cart: [] };
  //   default:
  //     return state;
  // }
  //or
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = {
          ...cartItem,
          individualItemCount: cartItem.individualItemCount + 1,
        };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  /*
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.individualItemCount === 1) {
      // console.log("Hey its one");
      tempCart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, individualItemCount: cartItem.individualItemCount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
  }
   */
  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = {
          ...cartItem,
          individualItemCount: cartItem.individualItemCount - 1,
        };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE) {
    let newCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload.id
    );

    return { ...state, cart: newCart };
  }
  if (action.type === GET_TOTALS) {
    let { totalPriceAmount, totalItemCount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        // console.log(cartItem);
        // cartItem -> individual cartItem in the array
        const { price, individualItemCount } = cartItem;

        const itemTotal = price * individualItemCount;

        cartTotal.totalPriceAmount += itemTotal;
        cartTotal.totalItemCount += individualItemCount;
        return cartTotal;
      },
      {
        totalPriceAmount: 0,
        totalItemCount: 0,
      }
    );
    totalPriceAmount = parseFloat(totalPriceAmount.toFixed(2));
    return { ...state, totalPriceAmount, totalItemCount };
  }
  if (action.type === TOGGLE_CARTITEM_COUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "increment") {
            return (cartItem = {
              ...cartItem,
              individualItemCount: cartItem.individualItemCount + 1,
            })
          }
          if (action.payload.toggle === "decrement") {
            return (cartItem = {
              ...cartItem,
              individualItemCount: cartItem.individualItemCount - 1,
            })
          }
        }
        return cartItem;
      }),
    };
  }

  return state;
}

export default reducer;
