import { Input } from '@mantine/core'
import React from 'react'
import Uploder from '../Main-Component/Uploder'
import SideBar from './SideBar'
import Button from '../button/Button'
import Modal from './portal/model'
// import 'bootstrap/dist/css/bootstrap.min.css';

const UserInfo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLocked, setIsLocked] = React.useState(true);
  const [isLockedOpen, setIsLockedOpen] = React.useState(false);
  return (
    <SideBar>
       <div class="flex items-center  w-full">

<div class="w-full mx-8">
    <div class="bg-light shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
        </div>
        <div class="p-2 ">
            <h1 class="text-center text-2xl text-white-900 font-medium leading-8 ">Joh Doe</h1>
            <div class="text-center text-gray-400 text-xs font-semibold">
                {/* <p>Web Developer</p> */}
            </div>
            <table class="text-xs my-3 flex justify-center	">
                <tbody><tr>
                    <td class="px-2 py-2  text-white-500 font-semibold text-xl ">Address </td>
                    <td class="px-2 py-2 text-lg">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-white-500 font-semibold text-xl">Phone </td>
                    <td class="px-2 py-2 text-lg">+977 9955221114</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-white-500 font-semibold text-xl">Email </td>
                    <td class="px-2 py-2 text-lg">john@exmaple.com</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-white-500 font-semibold text-xl">Gender </td>
                    <td class="px-2 py-2 text-lg">Famale</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-white-500 font-semibold text-xl">Age </td>
                    <td class="px-2 py-2 text-lg mb-5">22 </td>
                </tr>
              
            </tbody>
            
            </table>
            <div className='flex justify-end'>
            <Button  onClick={() => {
          setIsOpen(true);
        }}> Edit Profile</Button>
        </div>
        <Modal 
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
       <form class=" p-5 w-full">
    <div class="mb-4">
      <label class="block text-white-700 text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"/>
    </div>
    <div class="mb-4">
      <label class="block text-white-700 text-sm font-bold mb-2" for="username">
        Phone
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Phone"/>
    </div>
    <div class="mb-4">
      <label class="block text-white-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"/>
    </div>
    <div class="mb-4">
      <label class="block text-white-700 text-sm font-bold mb-2" for="username">
        Age
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Age"/>
    </div>
    </form>
        <p style={{ textAlign: "center" ,color:'black'}}>
         
         <Button>Edit</Button>
        </p>
      </Modal>
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