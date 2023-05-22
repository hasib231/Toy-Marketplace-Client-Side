import React, { useState } from 'react';

const Category = () => {
    const [activeTab, setActiveTab] = useState("Marvel");

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
      console.log(activeTab);
    };

    return (
      <div>
        <div className="hero mt-12">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
            </div>
        {/* tab */}
        <div className=" ">
          <div className="tabs w-60 mx-auto">
            <a
              onClick={() => handleTabClick("Marvel")}
              className={`tab tab-lifted ${
                activeTab === "Marvel" ? "tab-active" : ""
              }`}
            >
              Marvel
            </a>
            <a
              onClick={() => handleTabClick("DC")}
              className={`tab tab-lifted ${
                activeTab === "DC" ? "tab-active" : ""
              }`}
            >
              DC
            </a>
            <a
              onClick={() => handleTabClick("Transformers")}
              className={`tab tab-lifted ${
                activeTab === "Transformers" ? "tab-active" : ""
              }`}
            >
              Transformers
            </a>
          </div>
        </div>
      </div>
    );
};

export default Category;


