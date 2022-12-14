import React, { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { MdEmail, MdPassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
// import { Input } from "../Main-Component/UsedInputs";
import img from "../img/bg-c.jpg";
import {
  PasswordInput,
  Group,
  Button,
  Divider,
} from "@mantine/core";
import { Input } from "@mantine/core";
import { GoogleIcon } from "./GoogleIcon";
import { useSignIn } from "react-auth-kit";
import axios from "axios";
const Login = () => {
  // state is valid data 
  const [valid, setValid] = useState(null)
  // hook from auth kit 
  const signIn = useSignIn()
  // to redirecte to home 
  const navigate = useNavigate()

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  },[])

  // handle submit form 
  const handleSubmit = (event) => {
    event.preventDefault();
    // get data from form 
    const data = new FormData(event.currentTarget);
    const loginData = {
      email: data.get('email'),
      password: data.get('password'),
    }

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    // send post request to server with user login data  
    axios.post('http://127.0.0.1:8000/api/login', loginData)
    .then(res => {
      console.log(res.data);
      // 
      if (signIn({
        // token for auth 
        token: res.data.token,
        expiresIn: 10000,
        tokenType: "Bearer",
        // user data information 
        authState: res.data.user_info
      })) {
        // after login in navigate to home page 
        return navigate('/')
      }
      // yo catch error form server 
    }).catch(res => {
      // set error information 
      setValid(res.response.data)
      console.log(res.response.data);
    })
  };
  return (
    <div
      className=" w-100 pt-10 min-h-[110vh] bg-cover backdrop-blur-lg "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full 2xl:w-2/5 gap-8 p-8 sm:p-14 md:w-3/5    rounded-lg border border-border text-center ml-10  my-14 ">
        <p className="text-white text-center text-3xl">Login</p>
        <Group grow mb="md" mt="md">
          <GoogleIcon radius="xl">Google</GoogleIcon>
          {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
        </Group>
        {/* call handelsubmit on click login button   */}
        <form onSubmit={handleSubmit}>
          <Divider
            label="Or continue with email"
            labelPosition="center"
            my="lg"
          />
          {/*                                                                                          print valid message */}
          <p className="text-red-500 bg-black bg-opacity-50 rounded-lg text-center font-bold text-lg">{valid?.message}</p>
          <Input className="my-4" icon={<MdEmail />} placeholder="Your email" name="email" />
          <PasswordInput icon={<MdPassword />} placeholder="Your Password" name="password" />
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-subMain transitions hover:bg-main rounded-lg w-1/2 my-3"
              rightIcon={<FiLogIn />}
            >
              Login
            </Button>
          </div>
        </form>
        <p className="text-center text-border">
        {/* navigate to signup */}
          Don't have an account?{" "}
          <Link to="/register" className="text-dryGray font-semibold ml-2">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
