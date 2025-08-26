import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : 'movies',
    initialState : {
        movies : null,
        trailer : '',
    },
    reducers : {
        addMovies: (state, action)=>{
            state.movies = action.payload;  
        },
        addTrailer: (state, action)=>{
            state.trailer = action.payload;  
        }
    }
});
export const { addMovies, addTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;