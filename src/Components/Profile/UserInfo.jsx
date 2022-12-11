import { Input } from '@mantine/core'
import React from 'react'
import Uploder from '../Main-Component/Uploder'
import SideBar from './SideBar'
import Button from '../button/Button'
// import 'bootstrap/dist/css/bootstrap.min.css';

const UserInfo = () => {
  return (
    <SideBar>
       <div class="flex items-center  w-full">

<div class="w-full mx-8">
    <div class="bg-light shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
        </div>
        <div class="p-2">
            <h1 class="text-center text-2xl text-white-900 font-medium leading-8 ">Joh Doe</h1>
            <div class="text-center text-gray-400 text-xs font-semibold">
                {/* <p>Web Developer</p> */}
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-white-500 font-semibold text-xl">Address :</td>
                    <td class="px-2 py-2 text-lg">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-white-500 font-semibold text-xl">Phone :</td>
                    <td class="px-2 py-2 text-lg">+977 9955221114</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-white-500 font-semibold text-xl">Email :</td>
                    <td class="px-2 py-2 text-lg">john@exmaple.com</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-white-500 font-semibold text-xl">Gender :</td>
                    <td class="px-2 py-2 text-lg">Famale</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-white-500 font-semibold text-xl">Age :</td>
                    <td class="px-2 py-2 text-lg">22 </td>
                </tr>
            </tbody></table>
            <Button> Edit Profile</Button>
            {/* <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">Edit Profile</a>
            </div> */}

        </div>
    </div>
</div>

</div>
    </SideBar>  )
}

export default UserInfo