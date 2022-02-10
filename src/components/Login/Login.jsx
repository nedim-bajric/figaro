import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser, selectToken } from "../../redux/slices/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Navigate, Link } from "react-router-dom";
const Login = ({ reg, setReg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const login = async (e) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      window.localStorage.setItem("token", user.user.accessToken);
      dispatch(
        setActiveUser({
          token: user.user.accessToken,
        })
      );
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <div className="login relative w-screen h-screen flex items-center justify-center bg-gradient-to-tl from-slate-900 to-black">
      <div className="w-full max-w-xs xl:max-w-lg xxl:max-w-xl ">
        <form className=" shadow-2xl rounded px-8 pt-6 pb-8 mb-4 ">
          <h1 className="text-white font-bold font-mono text-center text-3xl mb-2 ">
            Login
          </h1>
          <div className="mb-4  ">
            <input
              className="shadow  appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6 ">
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? login : null)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red transition-colors duration-500 hover:bg-white hover:text-black font-mono text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={email?.length > 0 && password?.length > 0 ? login : null}
            >
              Login
            </button>
            <span
              className="inline-block cursor-pointer align-baseline font-bold text-sm transition-colors duration-500 text-gray-600 hover:text-white"
              href="#"
              onClick={() => setReg(!reg)}
            >
              Don't have an account?
            </span>
          </div>
        </form>
      </div>
      {message?.length > 0 ? (
        <div className="modal absolute xxl:max-w-xl w-full h-fit p-12 bg-gray-100 rounded-3xl flex flex-col items-center justify-start">
          <h1 className="font-mono text-6xl font-bold ">Warning</h1>
          {message?.includes("user-not-found") ? (
            <span className=" m-10 text-2xl text-center font-semibold">
              User not found. You may have entered incorrect information. If you
              don't have an account, please{" "}
              <Link to="/register" className="text-red-500 underline font-bold">
                create one.
              </Link>
            </span>
          ) : message?.includes("invalid-email") ? (
            <span className="m-10 text-2xl text-center font-semibold">
              You entered incorrect e-mail. Please try again.
            </span>
          ) : message?.includes("wrong-password") ? (
            <span className="m-10 text-2xl text-center font-semibold">
              You entered incorrect password. Please try again.
            </span>
          ) : null}
          <button
            className="bg-red-500 text-2xl font-bold py-2 px-5 uppercase cursor-pointer text-white rounded"
            onClick={() => setMessage("")}
          >
            close
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
