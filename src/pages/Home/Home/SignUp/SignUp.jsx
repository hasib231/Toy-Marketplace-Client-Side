import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../../../../providers/AuthProvider";


const SignUp = () => {
    const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const auth = getAuth();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password,photo);

      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
          updateUserData( name, photo);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
      
     const updateUserData = ( name, photo) => {
       updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo,
       })
         .then(() => {
          //  console.log(user);
         })
         .catch((error) => {
           setError(error.massage);
         });
     };
    
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img
            className="rounded-lg"
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=826&t=st=1684627759~exp=1684628359~hmac=e4b34eb57ea37b904653eac7965ed99eb0dcc74e857955e57405cb369d5e75aa"
            alt=""
          />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo Url"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary my-btn"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an Account?
              <Link className="text-blue-600 font-bold" to="/login">
                Login
              </Link>
                      </p>
                      <p className="text-red-500">{ error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
