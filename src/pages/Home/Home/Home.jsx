import React from 'react';

const Home = () => {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/448/492/878/avengers-late-backgrounds-desktop-wallpaper-preview.jpg")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold my-text">Hello there</h1>
            <p className="mb-5 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary my-btn">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Home;