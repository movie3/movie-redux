import React, { useEffect } from "react";
import { FaRegListAlt, FaUser } from "react-icons/fa";

import { HiViewGridAdd } from "react-icons/hi";
// import Table from "../../../Main-Components/Table";
// import { Movies } from "../../../Data/MovieData";
import SideBar from "../SideBar";
import Table from "../../Main-Component/Table";

function Dashboard() {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  },[])
  const Movies = [
    {
      name: "Army Of  The Dead",
      desc: "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
      titleImage: "1a.jpg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5",
      category: "Western",
      language: "English",
      year: "2022",
      time: "3hr",
      video: "",
      rate: 3.4,
      reviews: 23,
    },
    {
      name: "The Conjuring",
      desc: "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
      titleImage: "22.jpeg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5",
      category: "Thriller",
      language: "Chinese",
      year: "1999",
      time: "4hr",
      video: "",
      rate: 5,
      reviews: 100,
    },
    {
      name: "My Favorite Person",
      desc: "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
      titleImage: "33.jpg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5",
      category: "Adventure",
      language: "Korean",
      year: "2000",
      time: "11hr",
      video: "",
      rate: 2.5,
      reviews: 2,
    },
    {
      name: "Lets Be a crops",
      desc: "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
      titleImage: "44.jpg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5",
      category: "Musicals",
      language: "English",
      year: "2022",
      time: "5hr",
      video: "",
      rate: 1.5,
      reviews: 6,
    },
    {
      name: "Below her mouth",
      desc: "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
      titleImage: "55.jpg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5",
      category: "Romantic",
      language: "English",
      year: "1899",
      time: "1hr",
      video: "",
      rate: 5,
      reviews: 56,
    },
    {
      name: "Legend of the seeker",
      desc: "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
      titleImage: "66.jpg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5",
      category: "Horror",
      language: "Swahili",
      year: "2012",
      time: "19hr",
      video: "",
      rate: 4.5,
      reviews: 34,
    },
    {
      name: "Scarlet Heart",
      desc: "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
      titleImage: "77.jpg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5",
      category: "Fantasy",
      language: "Korean",
      year: "2005",
      time: "4hr",
      video: "",
      rate: 0,
      reviews: 0,
    },
    {
      name: "The Last Dance",
      desc: "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
      titleImage: "88.jpg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5",
      category: "Sports",
      language: "Japanese",
      year: "1999",
      time: "6hr",
      video: "",
      rate: 0.5,
      reviews: 0,
    },
    {
      name: "Titanic",
      desc: "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
      titleImage: "99.jpg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5",
      category: "Drama",
      language: "Swahili",
      year: "2012",
      time: "4hr",
      video: "",
      rate: 1,
      reviews: 1,
    },
    {
      name: "About Time of the Dead",
      desc: "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
      titleImage: "101.jpg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5",
      category: "Comedy",
      language: "French",
      year: "2000",
      time: "1hr",
      video: "",
      rate: 0,
      reviews: 4,
    },
    {
      name: "Game of Thrones",
      desc: "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
      titleImage: "111.webp",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5",
      category: "Action",
      language: "Chinese",
      year: "2012",
      time: "9hr",
      video: "",
      rate: 1,
      reviews: 6,
    },
  ];
  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Total Movies",
      total: 90,
    },
    {
      bg: "bg-blue-700",
      icon: HiViewGridAdd,
      title: "Total Categories",
      total: 8,
    },
    {
      bg: "bg-green-600",
      icon: FaUser,
      title: "Total Users",
      total: 134,
    },
  ];
  return (
    <SideBar>
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {DashboardData.map((data, index) => (
          <div
            key={index}
            className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
          >
            <div
              className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
            >
              <data.icon />
            </div>
            <div className="col-span-3">
              <h2>{data.title}</h2>
              <p className=" mt-2 font-bold">{data.total}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-md font-medium my-6 text-border">Recent Movies</h3>
      <Table data={Movies.slice(0, 5)} admin={true} />
    </SideBar>
  );
}

export default Dashboard;
