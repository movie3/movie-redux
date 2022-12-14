import React, { useEffect, useState } from "react";
import Titles from "./Titles";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Message, Select } from "./UsedInputs";
import Rating from "./Stars";
import { UsersData } from "./MovieData";
import axios from "axios";
import { movieReview } from "../../../API";
import { logDOM } from "@testing-library/react";

function MovieRates({ id }) {
  const [reviews, setReviews] = useState()
  console.log(id);
  useEffect(() => {
    axios.get(movieReview(id))
      .then(res => {
        console.log(res.data);
        setReviews(res.data.results)
      })
  }, [])



  const authorAvatar = (params)=>{
    if (params==null) {
      return 'https://cdn-icons-png.flaticon.com/512/1995/1995562.png'
    }
    return `https://image.tmdb.org/t/p/w500/${params}`
  }
  return (
    <div className="my-12">
      <Titles title="Reviews" Icon={BsBookmarkStarFill} />
      {/* REVIWERS */}
      <div className="col-span-3 flex flex-col gap-6">
        <h3 className="text-xl text-text font-semibold">Reviews {reviews?.length}</h3>
        <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
          {reviews?.map((author) => (
            <div className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg">
              <div className="col-span-2 bg-main hidden md:block">
                <img
                  src={authorAvatar(author.author_details.avatar_path)}
                  alt='Author'
                  className="w-full  rounded-lg object-cover"
                />
              </div>
              <div className="col-span-7 flex flex-col gap-2">
                <h2>{author?.author_details.name}</h2>
                <p className="text-xs leading-6 font-medium text-text">
                  {author?.content}
                </p>
              </div>
              {/* rates */}
              {console.log((author?.author_details))}
              <div className="col-span-3 flex-rows border-l border-border text-xs gap-1 text-star">
                <Rating value={Number(author?.author_details.rating/2)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default MovieRates;
