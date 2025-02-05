import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="flex justify-center items-center my-10">
      <div className="card bg-base-100 w-96 shadow-xl rounded-lg p-8">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl font-semibold text-black-700 mb-4">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>

          {/* Form fields */}
          <div className="mt-4">
            {/* Show first and last name fields for signup only */}
            {!isLoginForm && (
              <>
                <label className="form-control w-full max-w-xs my-2">
                  <span className="label-text text-black-700">First Name:</span>
                  <input
                    type="text"
                    value={firstName}
                    className="w-full max-w-xs border-2 border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 p-2 rounded-md outline-none"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <span className="label-text text-black-700">Last Name:</span>
                  <input
                    type="text"
                    value={lastName}
                    className="w-full max-w-xs border-2 border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 p-2 rounded-md outline-none"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                  />
                </label>
              </>
            )}
            
            <label className="form-control w-full max-w-xs my-2">
              <span className="label-text text-black-700">Email ID:</span>
              <input
                type="text"
                value={emailId}
                className="w-full max-w-xs border-2 border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 p-2 rounded-md outline-none"
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Enter your email"
              />
            </label>

            <label className="form-control w-full max-w-xs my-2">
              <span className="label-text text-black-700">Password:</span>
              <input
                type="password"
                value={password}
                className="w-full max-w-xs border-2 border-blue-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 p-2 rounded-md outline-none"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </label>
          </div>

          {/* Error message */}
          <p className="text-red-500 text-center mt-2">{error}</p>

          {/* Submit Button */}
          <div className="card-actions justify-center mt-4">
            <button
              className="btn btn-primary w-full py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-300"
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>

          {/* Toggle between login and signup */}
          <p
            className="text-center cursor-pointer py-2 text-blue-500 hover:text-blue-700"
            onClick={() => setIsLoginForm((prevValue) => !prevValue)}
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
