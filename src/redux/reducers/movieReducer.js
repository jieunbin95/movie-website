import { createSlice } from "@reduxjs/toolkit"

let initialState={
  popularMovie:{},
  topRateMovie:{},
  upcomingMovie:{},
  loading:true,
  genres:[]
}

const movieSlice=createSlice({
  name:'movies',
  initialState,
  reducers:{
    popularMovie(state,action){
      state.popularMovie=action.payload
      state.loading=false
    },

    topRateMovie(state,action){
      state.topRateMovie=action.payload
      state.loading=false
    },

    upcomingApi(state,action){
      state.upcomingMovie=action.payload
      state.loading=false
    },

    getMovieRequest(state,action){
      state.loading=action.payload
    },

    getMovieFailure(state,action){
      state.loading=action.payload
    },

    getGenreMovie(state,action){
      state.genres=action.payload
    }

  }

})

export const movieAction=movieSlice.actions;
export default movieSlice.reducer;