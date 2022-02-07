import React from "react";

const CartComponent = (props) => {
  return (
    <>
      <div className="container mx-5 px-3 my-3">
        <div className="card bg-success bg-opacity-75">
          <div className="card-body">
            <h5 className="card-title">{props.user.name}</h5>
            <h6 className="card-subtitle mb-2 text-warning">
              {props.user.company.name}
            </h6>
            <p className="card-text">{props.user.company.catchPhrase}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
