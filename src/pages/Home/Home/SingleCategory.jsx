import React from "react";

const SingleCategory = ({ toyCategory }) => {
  const {
    _id,
    sellerName,
    toyName,
    category,
    sellerEmail,
    photoUrl,
    price,
    rating,
    quantity,
    description,
  } = toyCategory;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
        <div>
          <img className="h-96" src={photoUrl} alt="Shoes" />
              </div>     
      </figure>
      <div className="card-body">
              <h2 className="card-title">{ toyName}</h2>
              <p className="text-xl">${price}</p>
              <p className="text-lg">Rating: { rating}</p>
        <div className="card-actions justify-end">
          <button className="btn my-btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
