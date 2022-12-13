import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
// import { Input } from "../Main-Component/UsedInputs";
import { useDisclosure } from "@mantine/hooks";
import img from "../img/bg-c.jpg";
import {
  PasswordInput,
  Group,
  Button,
  Divider,
  NativeSelect,
  NumberInput,
} from "@mantine/core";
import { Input } from "@mantine/core";
import { IconGenderBigender } from "@tabler/icons";
import { GoogleIcon } from "./GoogleIcon";
import { MdAir, MdEmail, MdPassword, MdPerson } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
const Register = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const [valid, setValid] = useState()
  const signIn = useSignIn()
  const navigate = useNavigate()
  //TODO: validate password
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const signupData = {
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('cpassword'),
      first_name: data.get('firstName'),
      last_name: data.get('lastName'),
      gender: data.get('gender'),
      age: data.get('age')
    }
    
    axios.post('http://127.0.0.1:8000/api/register', signupData).then(res => {
      console.log(res.data);
      if (signIn({
        token: res.data.token,
        expiresIn: 10000,
        tokenType: "Bearer",
        authState: res.data.user_info
      })) {
        return navigate('/')
      }
    }).catch(res => {
      console.log(res.response.data);
      setValid(res.response.data);
    })
    console.log(signupData);
  };
  return (
    <div
      className=" w-100 pt-10  min-h-[110vh] bg-cover backdrop-blur-lg"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full 2xl:w-2/5 gap-8  sm:p-14 md:w-3/5  rounded-lg border border-border text-center ml-10  my-20">
        <div className="">
          <p className="text-white text-center text-3xl">Register</p>
          <Group grow mb="md" mt="md">
            <GoogleIcon radius="xl">Google</GoogleIcon>
            {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
          </Group>

          <Divider
            label="Or continue with email"
            labelPosition="center"
            my="lg"
          />
          <form onSubmit={handleSubmit}>
            <p className="text-start text-red-500 text-sm"> {valid?.errors?.first_name} {valid?.errors?.last_name}</p>
            <div className="flex justify-between">

              <Input
                className="my-4 bg-slate-400"
                icon={<MdPerson />}
                placeholder="First Name"
                name="firstName"
              />          <Input
                className="my-4 bg-slate-400"
                icon={<MdPerson />}
                placeholder="Last Name"
                name="lastName"
              />
            </div>
            <p className="text-start text-red-500 text-sm"> {valid?.errors?.email}</p>
            <Input
              className="my-4 bg-slate-400"
              icon={<MdEmail />}
              placeholder="Your email"
              name="email"

            />
            <p className="text-start text-red-500 text-sm"> {valid?.errors?.password}</p>
            <PasswordInput
              className="my-4"
              icon={<MdPassword />}
              placeholder="Password"
              visible={visible}
              onVisibilityChange={toggle}
              name="password"
            />

            <PasswordInput
              icon={<MdPassword />}
              placeholder="Confirm Password"
              visible={visible}
              onVisibilityChange={toggle}
              name="cpassword"
            />
            <p className="text-start text-red-500 text-sm"> {valid?.errors?.age}</p>

            <NumberInput
              className="my-4"
              defaultValue={18}
              placeholder="Your age"
              icon={<FcCalendar />}
              name="age"
            />
            <p className="text-start text-red-500 text-sm"> {valid?.errors?.gender}</p>

            <NativeSelect
              className="my-4"
              data={["Gender", "Male", "Female"]}
              icon={<IconGenderBigender />}
              name="gender"
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-subMain transitions hover:bg-main rounded-lg w-1/2 my-3"
                rightIcon={<FiLogIn />}
              >
                Signup
              </Button>
            </div>
          </form>

          <p className="text-center text-white">
            Have an account?{" "}
            <Link to="/login" className="text-dryGray font-semibold ml-2">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
