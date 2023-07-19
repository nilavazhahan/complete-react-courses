// import React from "react";
// const Navbar = ({card}) => {
//   const {count} = card
//   return (
//     <nav>
//       <div className="nav-center">
//         <h3>ReduxGear</h3>
//         <div className="nav-container">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//             <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
//           </svg>
//           <div className="amount-container">
//             <p className="total-amount">{count}</p>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { connect } from "react-redux";
const Navbar = ({totalItemCount}) => {
  return (
    <nav>
      <div className="nav-center">
        <h3>ReduxGear</h3>
        <div className="nav-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="amount-container">
            <p className="total-amount">{totalItemCount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return { totalItemCount: state.totalItemCount };
};

export default connect(mapStateToProps)(Navbar);

//mapStateToProps -> we will map our store to the props of the component
//connect is a higher-oreder component so we need to run first set of parenthese so need to invoke it "mapStateToProps"
  // and we have second set of parentheses where we pass in the component.
  //we will export that component once we have run our connect
//we will export the navbar component only after the connect function executes
