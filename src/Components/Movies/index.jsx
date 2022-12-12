import React from 'react'
import PageHeader from '../page-header/PageHeader'
import MovieGrid from './movie-grid/MovieGrid'
import { Pagination } from "@mui/material";


const index = () => {
  return (
    <>
    <PageHeader>
        Movies
    </PageHeader>
    <div className="container">
        <div className="section mb-3">
            <MovieGrid/>
            
        </div>
    </div>
    </>
  )
}

export default index