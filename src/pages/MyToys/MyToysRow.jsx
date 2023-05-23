import React from 'react';

const MyToysRow = ({ myToy, handleDelete, handleUpdate }) => {
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
        <label
          htmlFor="my-modal"
          onClick={() => handleUpdate(_id)}
          className="btn my-btn"
        >
          update
        </label>
      </th>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn my-btn">
          Delete
        </button>
      </th>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </tr>
  );
};

export default MyToysRow;