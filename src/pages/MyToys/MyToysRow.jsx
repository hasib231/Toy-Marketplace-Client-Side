import React, { useState } from "react";

const MyToysRow = ({ myToy, handleDelete, setControl, control }) => {
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
  } = myToy;

  // const [updateData, setUpdateData] = useState([]);

  const handleUpdateToyData = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatePrice = form.price.value;
    const updateQuantity = form.quantity.value;
    const updateDescription = form.description.value;
    const updateToyData = {
      updatePrice,
      updateQuantity,
      updateDescription,
    };
    console.log(updateToyData);
    console.log(_id);

    fetch(`https://toy-marketplace-server-hasib231.vercel.app/myToys/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setControl(!control);
        }
      });
  };

  return (
    <tr>
      <th>
        <div className="avatar">
          <div className="rounded w-24 h-16">
            {<img src={photoUrl} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </th>
      <th>{sellerName}</th>
      <th>{sellerEmail}</th>
      <th>{toyName}</th>
      <th>{category}</th>
      <th>${price}</th>
      <th>{quantity}</th>
      <th>{rating}</th>
      <th>
        <label htmlFor={_id} className="btn my-btn">
          update
        </label>
      </th>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn my-btn">
          Delete
        </button>
      </th>

      {/* modal */}
      <input type="checkbox" id={_id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update toy data</h3>

          {/* from start */}
          <form onSubmit={handleUpdateToyData}>
            <div className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  defaultValue=""
                  placeholder="price"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue=""
                  placeholder="available quantity"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text">Toy description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered"
                placeholder="Write the toy description"
              ></textarea>
            </div>

            <div className="form-control mt-8 mb-16">
              <input
                className="btn btn-primary btn-block my-btn"
                type="submit"
                value="Confirm Update"
              />
            </div>
          </form>
          {/* from end */}
          <div className="modal-action">
            <label htmlFor={_id} className="btn my-btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </tr>
  );
};

export default MyToysRow;
