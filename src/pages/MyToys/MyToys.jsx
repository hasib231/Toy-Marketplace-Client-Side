import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [control, setControl] = useState(false);

  const url = `https://toy-marketplace-server-hasib231.vercel.app/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url, control]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete it?");
    if (proceed) {
      fetch(`https://toy-marketplace-server-hasib231.vercel.app/myToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = myToys.filter((myToy) => myToy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-5xl my-8">My Toys data</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy image</th>
              <th>Seller Name</th>
              <th>Seller email</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToysRow
                key={myToy._id}
                myToy={myToy}
                handleDelete={handleDelete}
                setControl={setControl}
                control={control}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
