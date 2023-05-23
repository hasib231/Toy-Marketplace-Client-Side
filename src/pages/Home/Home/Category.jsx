import React, { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";

const Category = () => {
  const [categorys, setCategorys] = useState([]);
  const [activeTab, setActiveTab] = useState("Marvel");

  useEffect(() => {
    fetch(`http://localhost:5000/toyByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setCategorys(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    //   console.log(activeTab);
  };

  return (
    <div>
          <div className="hero mt-12">
              
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold my-text">Browse toys</h1>
            <p className="py-6">
              Find the toy by category wise
            </p>
          </div>
        </div>
      </div>
      {/* tab */}
      <div>
        <div className="tabs w-80 mx-auto">
          <a
            onClick={() => handleTabClick("Marvel")}
            className={`tab tab-lifted  ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorys.map((toyCategory) => (
          <SingleCategory
            key={toyCategory._id}
            toyCategory={toyCategory}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Category;
