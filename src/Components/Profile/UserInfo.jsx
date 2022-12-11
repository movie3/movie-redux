import { Input } from '@mantine/core'
import React from 'react'
import Uploder from '../Main-Component/Uploder'
import SideBar from './SideBar'
import Button from '../button/Button'
import PageHeader from '../page-header/PageHeader';
import { useAuthUser, useSignOut } from 'react-auth-kit'
import { Navigate, useNavigate } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

const UserInfo = () => {
    const user = useAuthUser()
    const signOut = useSignOut()
    const navigate = useNavigate()
    console.log(user());
    return (
        <>
            <PageHeader > Welcome {user().first_name} {user().last_name}</PageHeader>
            <SideBar>
                <div class="flex items-center  w-full">

                    <div class="w-full mx-8">
                        <div class="bg-light shadow-xl rounded-lg py-3">
                            <div class="photo-wrapper p-2">
                                <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                            </div>
                            <div class="p-2">
                                <h1 class="text-center text-2xl text-white-900 font-medium leading-8 ">{user().first_name}</h1>
                                <div class="text-center text-gray-400 text-xs font-semibold">
                                    <p>{user().last_name}</p>
                                </div>
                                <table class="text-xs my-3">
                                    <tbody><tr>
                                        <td class="px-2 py-2 text-white-500 font-semibold text-xl">Email :</td>
                                        <td class="px-2 py-2 text-lg">{user().email}</td>
                                    </tr>
                                        <tr>
                                            <td class="px-2 py-2 text-white-500 font-semibold text-xl">Gender :</td>
                                            <td class="px-2 py-2 text-lg">{user().gender}</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-2 text-white-500 font-semibold text-xl">Age :</td>
                                            <td class="px-2 py-2 text-lg">{user().age} </td>
                                        </tr>
                                    </tbody></table>
                                <Button> Edit Profile</Button>
                                <Button onClick={e => {
                                    signOut()
                                    return navigate('/')
                                }}> Logout</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </SideBar>
        </>
    )
}

export default UserInfo