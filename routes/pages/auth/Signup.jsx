import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });
  const [pending, setPending] = useState(false);

  const navigate = useNavigate();

  const handleSignupForm = async () => {
    setPending(true);
    try {
      const response = await axios.post(
        `${baseUrl}/auth/register`,
        {
          fullname,
          email,
          password,
        },
        { withCredentials: true },
      );
      if (response.status === 201) {
        navigate("/login", { replace: true });
        setError({ ...error });
      }
    } catch (error) {
      setError({
        isError: true,
        errorMessage: error.response?.data?.message || error.message,
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Form
        action=""
        onSubmit={handleSignupForm}
        className="max-w-100 w-full space-y-6 border-2 bg-white border-gray-300 p-8 rounded-2xl"
      >
        <div>
          <h2 className="text-2xl text-center text-purple-600 font-semibold">
            Signup
          </h2>
          <p className="text-center text-gray-500 text-sm font-medium">
            It will take 3 sec
          </p>

          {error.isError && (
            <div className="border-l-4 mt-2 h-8 py-1 px-3 bg-red-100 border-red-600 rounded">
              {error.errorMessage}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <label htmlFor="fullname" className="font-semibold">
              Fullname<sup className="text-red-700 text-lg">*</sup>
            </label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter fullname"
              className="mt-2 border w-full outline-0 rounded p-2  ring-1 border-none  ring-gray-400 focus:ring-1 focus:ring-purple-600"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="font-semibold">
              Email<sup className="text-red-700 text-lg">*</sup>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="mt-2 w-full outline-0 rounded p-2 ring-1 border-none  ring-gray-400 focus:ring-1 focus:ring-purple-600"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="font-semibold">
              Password<sup className="text-red-700 text-lg">*</sup>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="at least 8 characters"
              className="mt-2 w-full outline-0 rounded p-2 ring-1 border-none ring-gray-400 focus:ring-1 focus:ring-purple-600"
              required
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full p-2.5 bg-purple-600 font-semibold rounded-md text-white tracking-wide mb-3 hover:bg-purple-700 hover:cursor-pointer"
            disabled={pending ? true : false}
          >
            {pending ? "Submitting..." : "Signup"}
          </button>
          <p className="text-center text-gray-500">
            Already have an account?{" "}
            <Link
              className="text-purple-500 font-medium hover:text-purple-600"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Signup;