import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE, TOGGLE_CARTITEM_COUNT, removeItem } from "../actions";

const CartItem = ({
  img,
  title,
  price,
  individualItemCount,
  remove,
  increase,
  decrease,
  toggle
}) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove()}>
          remove
        </button>
      </div>
      <div>
        {/* increase individualItemCount */}
        {/* <button className="amount-btn" onClick={() => increase()}> */}
        <button className="amount-btn" onClick={() => toggle("increment")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* individualItemCount */}
        <p className="amount">{individualItemCount}</p>
        {/* decrease individualItemCount */}
        {/* <button className="amount-btn" onClick={() => decrease()}> */}

        {/* <button
          className="amount-btn"
          onClick={() => {
            if (individualItemCount === 1) {
              return remove();
            } else {
              return decrease();
            }
          }}
        > */}
        <button
          className="amount-btn"
          onClick={() => {
            if (individualItemCount === 1) {
              return remove();
            } else {
              return toggle("decrement");
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps)
  const { id, individualItemCount } = ownProps;
  return {
    // remove: () => dispatch({ type: REMOVE, payload: { id: id } }),
    remove: () => dispatch(removeItem(id)),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () =>
      dispatch({ type: DECREASE, payload: { id, individualItemCount } }),
    toggle: (toggle) => dispatch({type: TOGGLE_CARTITEM_COUNT, payload: {id, toggle}})
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

//since all props of CartItem component are coming from cart component. so we don't need of mapStateToProps function so it is set to null
//ownProps is used to access the props that are being passed in the CartItem component.
