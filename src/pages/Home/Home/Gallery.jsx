import React from 'react';

const Gallery = () => {
    return (
      <div>
        <div className="hero mt-12">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold my-text">Gallery</h1>
              <p className="py-6">Find the toy in gellery</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            className="h-[600px]"
            src="https://w0.peakpx.com/wallpaper/933/680/HD-wallpaper-iron-man-iron-man-avengers-endgame-marvel-comics-marvel-superheroes-superheroes-marvel-infinity-gauntlet-thumbnail.jpg"
            alt=""
          />
          <img
            className="h-[600px]"
            src="https://w0.peakpx.com/wallpaper/726/463/HD-wallpaper-ironman-endgame-marvel-thumbnail.jpg"
            alt=""
          />
          <img
            className="h-[600px]"
            src="https://i.pinimg.com/236x/f7/81/8c/f7818c73ec0495609eeae1d125a753e9.jpg"
            alt=""
          />
        </div>
      </div>
    );
};

export default Gallery;