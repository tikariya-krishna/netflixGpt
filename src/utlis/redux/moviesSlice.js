import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : 'movies',
    initialState : {
        movies : null,
        popular: null,
        topRated: null,
        upcoming: null,
        trailer : '',
    },
    reducers : {
        addTrailer: (state, action)=>{
            state.trailer = action.payload;  
        },
        addMovies: (state, action)=>{
            state.movies = action.payload;  
        },
        addPopulerMovies: (state, action)=>{
            state.popular = action.payload;  
        },
        addTopRated: (state, action)=>{
            state.topRated = action.payload;  
        },
        addUpcoming: (state, action)=>{
            state.upcoming = action.payload;  
        },
    }
});
export const { addMovies, addTrailer, addPopulerMovies, addTopRated, addUpcoming } = moviesSlice.actions;
export default moviesSlice.reducer;