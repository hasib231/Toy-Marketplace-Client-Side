import React, { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToy = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-marketplace-server-hasib231.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  });
  return (
    <div>
      <h2 className="text-5xl my-8">All Toys data</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((allToy) => (
              <AllToysRow key={allToy._id} allToy={allToy}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
