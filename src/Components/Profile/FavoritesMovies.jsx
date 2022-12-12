import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
// import { Movies } from "../../Data/MovieData";
import Table from "../Main-Component/Table";
import { useAuthUser } from "react-auth-kit";
import axios from "axios";

function FavoritesMovies() {

  const user = useAuthUser()


  const Movies = [
    {
      name: 'Army Of  The Dead',
      desc: 'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
      titleImage: '1a.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5',
      category: 'Western',
      language: 'English',
      year: '2022',
      time: '3hr',
      video: '',
      rate: 3.4,
      reviews: 23,
    },
    {
      name: 'The Conjuring',
      desc: 'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
      titleImage: '22.jpeg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5',
      category: 'Thriller',
      language: 'Chinese',
      year: '1999',
      time: '4hr',
      video: '',
      rate: 5,
      reviews: 100,
    },
    {
      name: 'My Favorite Person',
      desc: 'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
      titleImage: '33.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5',
      category: 'Adventure',
      language: 'Korean',
      year: '2000',
      time: '11hr',
      video: '',
      rate: 2.5,
      reviews: 2,
    },
    {
      name: 'Lets Be a crops',
      desc: 'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
      titleImage: '44.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5',
      category: 'Musicals',
      language: 'English',
      year: '2022',
      time: '5hr',
      video: '',
      rate: 1.5,
      reviews: 6,
    },
    {
      name: 'Below her mouth',
      desc: 'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
      titleImage: '55.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5',
      category: 'Romantic',
      language: 'English',
      year: '1899',
      time: '1hr',
      video: '',
      rate: 5,
      reviews: 56,
    },
    {
      name: 'Legend of the seeker',
      desc: 'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
      titleImage: '66.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5',
      category: 'Horror',
      language: 'Swahili',
      year: '2012',
      time: '19hr',
      video: '',
      rate: 4.5,
      reviews: 34,
    },
    {
      name: 'Scarlet Heart',
      desc: 'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
      titleImage: '77.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5',
      category: 'Fantasy',
      language: 'Korean',
      year: '2005',
      time: '4hr',
      video: '',
      rate: 0,
      reviews: 0,
    },
    {
      name: 'The Last Dance',
      desc: 'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
      titleImage: '88.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5',
      category: 'Sports',
      language: 'Japanese',
      year: '1999',
      time: '6hr',
      video: '',
      rate: 0.5,
      reviews: 0,
    },
    {
      name: 'Titanic',
      desc: 'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
      titleImage: '99.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5',
      category: 'Drama',
      language: 'Swahili',
      year: '2012',
      time: '4hr',
      video: '',
      rate: 1,
      reviews: 1,
    },
    {
      name: 'About Time of the Dead',
      desc: 'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
      titleImage: '101.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5',
      category: 'Comedy',
      language: 'French',
      year: '2000',
      time: '1hr',
      video: '',
      rate: 0,
      reviews: 4,
    },
    {
      name: 'Game of Thrones',
      desc: 'Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.',
      titleImage: '111.webp',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5',
      category: 'Action',
      language: 'Chinese',
      year: '2012',
      time: '9hr',
      video: '',
      rate: 1,
      reviews: 6,
    },
  ];
  const [favoriteMovieId, setFavoriteMovieId] = useState()
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/gatfav?user_id=${user().id}`)
      .then(res => {
        res.data.forEach(movie=>{
          
        })
      })
      .catch(res => console.log(res))
  }, [])

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Favorites Movies</h2>
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
            Delete All
          </button>
        </div>

        <Table data={Movies} admin={false} />
      </div>
    </SideBar>
  );
}

export default FavoritesMovies;
