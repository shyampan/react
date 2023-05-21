import React from "react";

export const Card = (props) => {
  return (
    <>
      <div className="container-fluid card mx-auto gy-4 " style={{ width: "20rem" }}>
        <img className="card-img-top m-2 " src={props.img} alt="Card cap"  />
        <div className="card-body gy-2 ">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="www.google.com" className="btn btn-primary">
            Click Here
          </a>
        </div>
      </div>
      <br/>
    </>
  );
};
