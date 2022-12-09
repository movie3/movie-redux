const baseUrl = 'https://api.themoviedb.org/3/'

const apiKey = '058557a0879cb519f912c08d6a9e4495'

const popularMovie = `movie/popular?api_key=${apiKey}&language=en-US&page=`
const topRatedMovie = `movie/top_rated?api_key=${apiKey}&language=en-US&page=`
const upcomingMovie = `movie/upcoming?api_key=${apiKey}&language=en-US&page=`
const nowPlayingMovie = `movie/now_playing?api_key=${apiKey}&language=en-US&page=`
const latestMovie = `movie/latest?api_key=${apiKey}&language=en-US&page=`


export const getPopularMovie = (page = 1) => `${baseUrl}${popularMovie}${page}`
export const getTopRatedMovie = (page = 1) => `${baseUrl}${topRatedMovie}${page}`
export const getUpcomingMovie = (page = 1) => `${baseUrl}${upcomingMovie}${page}`
export const getNowPlayingMovie = (page = 1) => `${baseUrl}${nowPlayingMovie}${page}`
export const getLatestMovie = (page = 1) => `${baseUrl}${latestMovie}${page}`
export const getMovieDetails = (movieId) => `${baseUrl}movie/${movieId}?api_key=${apiKey}&language=en-US`
export const getExternalIds = (movieId) => `${baseUrl}movie/${movieId}/external_ids?api_key=${apiKey}`
export const getMovieImage = (movieId) => `${baseUrl}movie/${movieId}/images?api_key=${apiKey}`
export const getMovieRecommendations = (movieId, page = 1) => `${baseUrl}movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=${page}`
export const getMovieSimilar = (movieId, page = 1) => `${baseUrl}movie/${movieId}/similar?api_key=${apiKey}&language=en-US&page=${page}`
export const getMovieVideos = (movieId) => `${baseUrl}movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
export const getTrending = (time = 'day') => `${baseUrl}trending/all/${time}?api_key=${apiKey}`
export const search = (movieName, page = 1) => `${baseUrl}search/movie?api_key=${apiKey}&language=en-US&query=${movieName}&page=${page}&include_adult=false`

//TODO: find by id 








