import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
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
import { IconAt, IconAsterisk, IconGenderBigender } from "@tabler/icons";
import { GoogleIcon } from "./GoogleIcon";
import { MdEmail, MdPassword } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
const Register = () => {
  const [visible, { toggle }] = useDisclosure(false);
  //TODO: validate password
  return (
    <div
      className=" w-100 pt-10 flex-colo min-h-[95vh] bg-cover backdrop-blur-lg"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full 2xl:w-2/5 gap-8 flex-colo sm:p-14 md:w-3/5  rounded-lg border border-border text-center ml-10  mt-8">
        <div className="">
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
          <Input
            className="my-4 bg-slate-400"
            icon={<MdEmail />}
            placeholder="Your email"
          />
          <PasswordInput
            className="my-4"
            icon={<MdPassword />}
            placeholder="Password"
            visible={visible}
            onVisibilityChange={toggle}
          />
          <PasswordInput
            icon={<MdPassword />}
            placeholder="Confirm Password"
            visible={visible}
            onVisibilityChange={toggle}
          />
          <NumberInput
            className="my-4"
            defaultValue={18}
            placeholder="Your age"
            icon={<FcCalendar />}
          />
          <NativeSelect
            className="my-4"
            data={["Gender", "Male", "Female"]}
            icon={<IconGenderBigender />}
          />
          <div className="flex justify-center">
            <Button
              className="bg-subMain transitions hover:bg-main rounded-lg w-1/2 my-3"
              rightIcon={<FiLogIn />}
            >
              Signup
            </Button>
          </div>

          <p className="text-center text-border">
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
