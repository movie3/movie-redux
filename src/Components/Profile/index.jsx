import axios from 'axios';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react'
import { useAuthUser, useSignIn } from 'react-auth-kit';
import { SwiperSlide, Swiper } from "swiper/react";
import { findById } from '../../API';
import MovieCard from '../movie-card/MovieCard';
import { storage } from './firebase';
import "../movie-list/movie-list.scss";
import { Input, Modal, Button, NumberInput, NativeSelect, Select } from '@mantine/core';
import { MdEmail, MdPerson } from 'react-icons/md';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { FiRefreshCcw } from 'react-icons/fi';
import { Table } from '@mantine/core';


//TODO: get user info 
//TODO: get user fav 
//TODO: edit user info  

const Profile = () => {
    const [favForUser, setFaveForUser] = useState([]);
    const [visible, { toggle }] = useDisclosure(false);
    const [valid, setValid] = useState()
    const signIn = useSignIn()
    const navigate = useNavigate()
    const [imgUrl, setImgUrl] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);
    const inputRef = useRef(null);
    const [favoriteMovieId, setFavoriteMovieId] = useState()
    const [render, setRender] = useState(false)
    const userAuth = useAuthUser()
    const [user, setUser] = useState()
    const [opened, setOpened] = useState(false);
    const [comment, setComment] = useState()
    const [Post, setPost] = useState(0)
    let moviesArr = []

    const getUserCommentAndPost = () => {
        axios.get(`http://127.0.0.1:8000/api/getUserComments/${user?.id}`)
            .then(res => {
                console.log(res.data);
                setComment(res.data);
            }).catch(res => console.log(res))

        axios.get(`http://127.0.0.1:8000/api/getUserPost/${user?.id}`)
            .then(res => {
                console.log(res.data);
                setPost(res.data);
            }).catch(res => console.log(res))
    }

    const getUserInfo = () => {
        axios.get(`http://127.0.0.1:8000/api/getUserInfo/${userAuth()?.id}`)
            .then(res => {
                console.log(res.data);
                setUser(res.data);
                setImgUrl(res.data.user_img)
            }).catch(res => console.log(res))
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    async function getFavMovieFromApi(movies) {
        await movies.forEach(element => {
            let g = axios.get(findById(element.movies_id));
            g.then(res => moviesArr.push(res.data));
        });
        setFavoriteMovieId(moviesArr);
        // return moviesArr;
        console.log(moviesArr);
    }
    async function getFromDatabase() {
        let response = await axios.get(`http://127.0.0.1:8000/api/gatfav?user_id=${user?.id}`)
        getFavMovieFromApi(response.data);
    }
    useEffect(() => {
        console.log('render ');
        getFromDatabase()
        getFavForUser()
        getUserCommentAndPost()
        //  console.log(movieIds);
    }, [user])
    const handleClick = () => {
        // 👇️ open file input box on click of other element
        inputRef.current.click();
    };
    const getFavForUser = () => {
        let favArr = [];
        axios
            .get(`http://127.0.0.1:8000/api/gatfav?user_id=${user?.id}`)
            .then((res) => {
                // setFaveForUser(res.data)
                res.data.forEach((movie) => {
                    favArr.push(movie?.movies_id);
                    setFaveForUser(favArr);
                });
            });
    };
    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        // console.log('fileObj is', fileObj);

        // 👇️ reset file input
        event.target.value = null;

        // 👇️ is now empty
        // console.log(event.target.files);

        // 👇️ can still access file object here
        // console.log(fileObj);
        // console.log(fileObj.name);

        const storageRef = ref(storage, `files/${fileObj.name}`);
        const uploadTask = uploadBytesResumable(storageRef, fileObj);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgresspercent(progress);
                console.log(progress);

            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL)
                    updateUserImg(downloadURL)
                    console.log(downloadURL);
                    //TODO: save url to database
                });
            }
        );

    }
    const updateUserImg = (downloadURL) => {
        axios.post(`http://127.0.0.1:8000/api/updateUserImg`, { user_id: user.id, user_img: downloadURL })
            .then(res => {
                console.log(res);

            }).catch(res => {
                console.log(res);
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // data.append('user_id', userAuth().id);
        const update = {
            user_id: userAuth().id,
            first_name: data.get('firstName'),
            last_name: data.get('lastName'),
            email: data.get('email'),
            gender: data.get('gender'),
            age: data.get('age')
        }
        console.log(update);
        axios.post(`http://127.0.0.1:8000/api/update`, update)
            .then(res => {
                console.log(res);
                // setUser(res.data)
                getUserInfo()
                setOpened(false)

            }).catch(res => {
                console.log(res);
            })
    }

    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    ];

    return (
        <div>
            {/* component */}
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")' }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black" />
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative cursor-pointer">
                                            <img onClick={handleClick} alt="..." src={imgUrl} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px " />
                                            <input style={{ display: 'none' }} ref={inputRef} type="file" onChange={handleFileChange} />

                                        </div>

                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button onClick={e => setOpened(true)} className="bg-red-700  active:bg-pink-600 uppercase text-white font-bold hover:shadow-2xl shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                                Edit
                                            </button>
                                            <Modal
                                                overlayBlur={0.1}
                                                size="lg"
                                                opened={opened}
                                                onClose={() => setOpened(false)}
                                                title="Edit Profile"
                                                styles={{
                                                    modal: {
                                                        padding: 'var(--tw-p-3)',
                                                        backgroundColor: 'rgb(17 24 39 / var(--tw-bg-opacity)) !important'
                                                    }
                                                }}
                                            >
                                                <div className="w-full rounded-lg text-center bg-gray-900 text-white p-1 shadow-2xl">
                                                    <form className='bg-gray-900 text-white' onSubmit={handleSubmit}>
                                                        <p className="text-start text-red-500 text-sm"> {valid?.errors?.first_name} {valid?.errors?.last_name}</p>
                                                        <div className="flex justify-between">
                                                            <Input
                                                                className="my-4 bg-slate-400"
                                                                icon={<MdPerson />}
                                                                placeholder="First Name"
                                                                name="firstName"
                                                                defaultValue={user?.first_name}
                                                            />
                                                            <Input
                                                                className="my-4 bg-slate-400"
                                                                icon={<MdPerson />}
                                                                placeholder="Last Name"
                                                                name="lastName"
                                                                defaultValue={user?.last_name}
                                                            />
                                                        </div>
                                                        <p className="text-start text-red-500 text-sm"> {valid?.errors?.email}</p>
                                                        <Input
                                                            className="my-4 bg-slate-400"
                                                            icon={<MdEmail />}
                                                            placeholder="Your email"
                                                            name="email"
                                                            defaultValue={user?.email}
                                                        />
                                                        <p className="text-start text-red-500 text-sm"> {valid?.errors?.age}</p>

                                                        <NumberInput
                                                            className="my-4"
                                                            defaultValue={Number(user?.age)}
                                                            placeholder="Your age"
                                                            name="age"
                                                        />
                                                        <p className="text-start text-red-500 text-sm"> {valid?.errors?.gender}</p>

                                                        <Select
                                                            className="my-4"
                                                            data={["Gender", "Male", "Female"]}

                                                            name="gender"
                                                            defaultValue={user?.gender}

                                                        />
                                                        <div className="flex justify-center">
                                                            <Button
                                                                type="submit"
                                                                className="bg-subMain transitions hover:bg-main rounded-lg w-1/2 my-3"
                                                                rightIcon={<FiRefreshCcw />}
                                                            >
                                                                Update
                                                            </Button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </Modal>


                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-300">{Post?.length}</span><span className="text-sm text-blueGray-400">Post</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-300">{comment?.length}</span><span className="text-sm text-blueGray-400">Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal text-blueGray-400 mb-2">
                                        {user?.first_name + " " + user?.last_name}
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 font-bold ">
                                        Email : {user?.email}
                                    </div>
                                    <div className="text-sm leading-normal mt-0 mb-2 font-bold ">
                                        Gender: {user?.gender}
                                    </div>
                                    <div className="text-sm leading-normal mt-0 mb-2 font-bold ">
                                        Age: {user?.age}
                                    </div>
                                </div>
                                <div className="movie-list my-5">
                                    <h2 className='text-4xl font-semibold leading-normal text-blueGray-400 mb-2'>Favorites</h2>
                                    <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
                                        {favoriteMovieId?.map((item, i) => {
                                            let isFav = false;
                                            if (favForUser.includes(item.id)) {
                                                isFav = true;
                                            }
                                            return (
                                                <SwiperSlide key={i}>
                                                    <MovieCard
                                                        item={item}
                                                        isFav={isFav}
                                                    // setRender={setRender}

                                                    />
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default Profile