import React from 'react'
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { Input } from "../Main-Component/UsedInputs";
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
} from '@mantine/core';
import { Input } from '@mantine/core';
import { IconAt,IconAsterisk } from '@tabler/icons';
import { GoogleIcon } from './GoogleIcon'
// import Logo from '../asset/movie-logo.png'
const Login = () => {
  //TODO: Age is roznameh
  return (
    <div className="container mx-auto pt-10 flex-colo min-h-[72vh]">
      <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border border-border">
        <Group grow mb="md" mt="md">
          <GoogleIcon radius="xl">Google</GoogleIcon>
          {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />
        <p className='text-white text-center text-3xl'>Movie Logo</p>
        <Input
          className='my-4'
          icon={<IconAt />}
          placeholder="Your email"
        />
        <PasswordInput
          icon={<IconAsterisk />}
          placeholder="Your email"
        />
        <div className='flex justify-center'>
          <Button className='bg-subMain transitions hover:bg-main rounded-lg w-1/2 my-3' rightIcon={<FiLogIn />}>Login</Button>
        </div>
        <p className="text-center text-border">
          Don't have an account?{" "}

          <Link to="/register" className="text-dryGray font-semibold ml-2">
            Sign Up
          </Link>
        </p>
      </div>
    </div>

  )
}

export default Login