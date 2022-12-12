import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
// import { Movies } from "../../Data/MovieData";
import Table from "../Main-Component/Table";
import { useAuthUser } from "react-auth-kit";
import axios from "axios";
import { findById } from "../../API";

import  PageHeader  from '../page-header/PageHeader'
function FavoritesMovies() {
  const [favoriteMovieId, setFavoriteMovieId] = useState()
  const [render, setRender] = useState(false)

  const user = useAuthUser()
  let moviesArr = []

  async function getFavMovieFromApi(movies) {
    await movies.forEach(element => {
      let g = axios.get(findById(element.movies_id));
      g.then(res => moviesArr.push(res.data));
    });
    setFavoriteMovieId(moviesArr);
    // return moviesArr;
  }
  async function getFromDatabase() {
    let response = await axios.get(`http://127.0.0.1:8000/api/gatfav?user_id=${user().id}`)
    getFavMovieFromApi(response.data);
  }
  useEffect(() => {
    console.log('render ');
    getFromDatabase()
    //  console.log(movieIds);
  }, [])

  if (favoriteMovieId == null || favoriteMovieId == undefined) {
    return <h1>Loading</h1>
  }
  return (
    <>
      <PageHeader>Favorites Movies</PageHeader>
      <SideBar>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2">
            <h2 className="text-xl font-bold">Favorites Movies</h2>
            <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
              Delete All
            </button>
          </div>

          <Table data={favoriteMovieId} admin={false} render={setRender} />
        </div>
      </SideBar>
    </>
  );
}

export default FavoritesMovies;
