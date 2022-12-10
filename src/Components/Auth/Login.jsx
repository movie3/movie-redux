import React from "react";
import { FiLogIn } from "react-icons/fi";
import { MdEmail, MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
// import { Input } from "../Main-Component/UsedInputs";
import img from "../img/bg-c.jpg";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import { Input } from "@mantine/core";
import { IconAt, IconAsterisk } from "@tabler/icons";
import { GoogleIcon } from "./GoogleIcon";
// import Logo from '../asset/movie-logo.png'
const Login = () => {
  //TODO: Age is roznameh
  return (
    <div
      className=" w-100 pt-10 flex-colo min-h-[95vh] bg-cover backdrop-blur-lg "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5   rounded-lg border border-border text-center ml-10  mt-8">
        <Group grow mb="md" mt="md">
          <GoogleIcon radius="xl">Google</GoogleIcon>
          {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />
        <p className="text-white text-center text-3xl">Movie Logo</p>
        <Input className="my-4" icon={<MdEmail />} placeholder="Your email" />
        <PasswordInput icon={<MdPassword />} placeholder="Your Password" />
        <div className="flex justify-center">
          <Button
            className="bg-subMain transitions hover:bg-main rounded-lg w-1/2 my-3"
            rightIcon={<FiLogIn />}
          >
            Login
          </Button>
        </div>
        <p className="text-center text-border">
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
