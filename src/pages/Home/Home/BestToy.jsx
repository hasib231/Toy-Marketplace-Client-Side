import React from 'react';

const BestToy = () => {
    return (
      <div>
        <div className="hero mt-12">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold my-text">Best Toys</h1>
              <p className="py-6">Best Toys here</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center shadow-lg p-12 rounded-lg ">
          <div className="card w-96 bg-base-100 shadow-xl my-card">
            <figure className="px-10 pt-10">
              <img
                src="https://static-01.daraz.com.bd/p/fa397a4e221439143b9d0c91de6ff1ef.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Iron Man</h2>

              <div className="card-actions">
                <button className="btn btn-primary my-btn">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl my-card">
            <figure className="px-10 pt-10">
              <img
                src="https://d3fa68hw0m2vcc.cloudfront.net/977/280136524.jpeg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Batman</h2>

              <div className="card-actions">
                <button className="btn btn-primary my-btn">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl my-card">
            <figure className="px-10 pt-10">
              <img
                src="https://static-01.daraz.com.bd/p/b24e52c10b24840dd3f3c58d6aa8c4d2.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Captain America</h2>

              <div className="card-actions">
                <button className="btn btn-primary my-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BestToy;