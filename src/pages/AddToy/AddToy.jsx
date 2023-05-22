import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const handleAddToyData = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        const photoUrl = form.photoUrl.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const toyData = {
            toyName,sellerName,sellerEmail,photoUrl,category,price,rating,quantity,description
        }
        console.log(toyData);
    }

    return (
      <div>
        <h2 className="text-center text-3xl my-5">Add a new toy data </h2>
        <form onSubmit={handleAddToyData}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                name="toyName"
                placeholder="toy name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="sellerName"
                placeholder="seller name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="text"
                name="sellerEmail"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Picture URL of toy</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                defaultValue=""
                placeholder="picture url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy category</span>
              </label>
              <select name="category" className="select select-bordered">
                <option>Marvel</option>
                <option>DC</option>
                <option>Transformers</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue=""
                placeholder="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                defaultValue=""
                placeholder="rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <input
                type="text"
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
              className="btn btn-primary btn-block"
              type="submit"
              value="Add Toy"
            />
          </div>
        </form>
      </div>
    );
};

export default AddToy;