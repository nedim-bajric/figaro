import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser, selectToken } from "../../redux/slices/userSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Navigate, Link } from "react-router-dom";
const Register = ({ reg, setReg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setconfPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const login = async (e) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      window.localStorage.setItem("token", user.user.accessToken);
      dispatch(
        setActiveUser({
          token: user.user.accessToken,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login relative w-screen h-screen flex items-center justify-center bg-gradient-to-tl from-slate-900 to-black">
      <div className="w-full max-w-xs xl:max-w-lg xxl:max-w-xl ">
        <form className=" shadow-2xl rounded px-8 pt-6 pb-8 mb-4 ">
          <h1 className="text-white font-bold font-mono text-center text-3xl mb-2 ">
            Register
          </h1>
          <div className="mb-4  ">
            <input
              className="shadow  appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confpassword"
              type="password"
              placeholder="Confirm Password"
              required
              onChange={(e) => setconfPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="cursor-pointer transition-colors duration-500 hover:bg-white hover:text-black font-mono text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              disabled={
                email?.length === 0 ||
                password?.length === 0 ||
                confpassword?.length === 0 ||
                password !== confpassword
                  ? true
                  : false
              }
              onClick={password === confpassword ? login : null}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
      {message?.length > 0 ? (
        <div className="modal absolute xxl:max-w-xl w-full h-fit p-12 bg-gray-100 rounded-3xl flex flex-col items-center justify-start">
          <h1 className="font-mono text-6xl font-bold ">Warning</h1>
          <span className="m-10 text-2xl text-center font-semibold">
            {message}
          </span>
          <button
            className="bg-red-500 text-2xl font-bold py-2 px-5 uppercase cursor-pointer text-white"
            onClick={() => setMessage("")}
          >
            close
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Register;
