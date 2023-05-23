import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const details = useLoaderData();
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
    } = details;
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row gap-20">
            <img src={photoUrl} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="card w-96 my-card shadow-xl">
              <div className="card-body">
                <h2 className="card-title font-bold">Toy details</h2>
                <h2 className="font-bold">Toy name: {toyName}</h2>
                <h3 className="font-bold">seller name: {sellerName}</h3>
                <h3 className="font-bold">seller email: {sellerEmail}</h3>
                <h3 className="font-bold">price: {price}</h3>
                <h3 className="font-bold">rating: {rating}</h3>
                <h3 className="font-bold">available quantity: {quantity}</h3>
                <h3 className="">description: {description}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ViewDetails;