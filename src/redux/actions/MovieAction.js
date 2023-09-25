import api from "../api"
import { movieAction } from "../reducers/movieReducer"

const API_KEY=process.env.REACT_APP_API_KEY


const getMovies=()=>{
  

  return async(dispatch,getState)=>{
    try{
      dispatch(movieAction.getMovieRequest(true))
      const popularMovieApi= api.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )

    const topRateApi= api.get(
     `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    )

    const upcomingApi= api.get(
      `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    )

    const genreApi=api.get(
      `/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )

    // 동시에 api를 불러오고 싶을때 사용 (Promise.all([]))
    let [popularMovie,topRateMovie,upcomingMovie,genreList]=
    await Promise.all([popularMovieApi,topRateApi,upcomingApi,genreApi])
      
    dispatch(movieAction.popularMovie(popularMovie.data))
    dispatch(movieAction.topRateMovie(topRateMovie.data))
    dispatch(movieAction.upcomingApi(upcomingMovie.data))
    dispatch(movieAction.getGenreMovie(genreList.data.genres))

    }catch(error){
      dispatch(movieAction.getMovieFailure(false))
    }
    
  
  }
}

export const MovieAction={
  getMovies
}