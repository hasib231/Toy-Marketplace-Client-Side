import React from 'react';

const AllToysRow = ({allToy}) => {
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
    } = allToy;
    return (
      <tr>
        <th>{sellerName}</th>
        <th>{toyName}</th>
        <th>{category}</th>
        <th>${price}</th>
        <th>{quantity}</th>
        <th>
          <button className="btn my-btn">View Details</button>
        </th>
      </tr>
    );
};

export default AllToysRow;