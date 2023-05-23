import React from 'react';

const OurServices = () => {
    return (
      <div>
        <div className="hero mt-12">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold my-text">Our Services</h1>
              <p className="py-6">Best Services here</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center shadow-lg p-12 rounded-lg ">
          <div>
            <img
              src="https://img.freepik.com/free-vector/delivery-man-wearing-medical-maks_23-2148503788.jpg?w=2000"
              alt=""
            />
            <h1 className="text-4xl mt-12 my-text">Fast delivery</h1>
          </div>
          <div>
            <img
              className=""
              src="https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?w=996&t=st=1684859011~exp=1684859611~hmac=b41fa38ca2d25e7d1bd0d4613bb18c770e2a2f7e8e123c8e6ef8de8a488fef41"
              alt=""
            />
            <h1 className="text-4xl mt-12 my-text">Order customize toy</h1>
          </div>
          <div>
            <img
              className="h-[250px]"
              src="https://img.freepik.com/free-vector/shelf-box-full-toys-white_1308-41753.jpg?w=996&t=st=1684859439~exp=1684860039~hmac=64055dcc43ab6921d870911e2177eea6aa4b76b2cb06323802a010f723aabd8c"
              alt=""
            />
            <h1 className="text-4xl mt-12 my-text">Can sell your used toy</h1>
          </div>
        </div>
      </div>
    );
};

export default OurServices;