import { Input } from '@mantine/core'
import React from 'react'
import Uploder from '../Main-Component/Uploder'
import SideBar from './SideBar'
import Button from '../button/Button'
import Modal from './portal/model'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';
import PageHeader from '../page-header/PageHeader'

const UserInfo = () => {
    const isAuth = useIsAuthenticated()
    const user = useAuthUser()
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <PageHeader> Welcome {user().first_name}  {user().last_name}</PageHeader>
            <SideBar>
                <div class="flex items-center  w-full">

                    <div class="w-full mx-8">
                        <div class="bg-light shadow-xl rounded-lg py-3">
                            <div class="photo-wrapper p-2">
                                <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                            </div>
                            <div class="p-2 ">
                                <h1 class="text-center text-2xl text-white-900 font-medium leading-8 ">{user().first_name}</h1>
                                <div class="text-center text-gray-400 text-xs font-semibold">
                                    <p>{user().last_name}</p>
                                </div>
                                <table class="text-xs my-3 flex justify-center	">
                                    <tbody>
                                        <tr>
                                            <td class="px-2 py-2 text-white-500 font-semibold text-xl">Email </td>
                                            <td class="px-2 py-2 text-lg">{user().email}</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-2 text-white-500 font-semibold text-xl">Gender </td>
                                            <td class="px-2 py-2 text-lg">{user().gender}</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-2 text-white-500 font-semibold text-xl">Age </td>
                                            <td class="px-2 py-2 text-lg mb-5">{user().age} </td>
                                        </tr>

                                    </tbody>

                                </table>
                                <div className='flex justify-end'>
                                    <Button onClick={() => { setIsOpen(true); }}> Edit Profile</Button>
                                </div>
                                <Modal onClose={() => { setIsOpen(false); }} open={isOpen}>
                                    <form class=" p-5 w-full">
                                        <div class="mb-4">
                                            <label class="block text-white-700 text-sm font-bold mb-2" for="username">
                                                First Name
                                            </label>
                                            <input value={user().first_name} name="firstName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                                        </div>
                                        <div class="mb-4">
                                            <label class="block text-white-700 text-sm font-bold mb-2" for="username">
                                                Last Name
                                            </label>
                                            <input value={user().last_name} name="lastName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                                        </div>

                                        <div class="mb-4">
                                            <label class="block text-white-700 text-sm font-bold mb-2" for="username">
                                                Email
                                            </label>
                                            <input name="email" value={user().email} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                                        </div>
                                        <div class="mb-4">
                                            <label class="block text-white-700 text-sm font-bold mb-2" for="username">
                                                Age
                                            </label>
                                            <input name="age" value={user().age} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Age" />
                                        </div>
                                    </form>
                                    <p style={{ textAlign: "center", color: 'black' }}>
                                        <Button>Save</Button>
                                    </p>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </SideBar>
        </>
    )
}

export default UserInfo