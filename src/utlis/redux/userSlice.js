import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
    name: "user",
    initialState:{
        user : []
    },
    reducers:{
        addUser:(state,action) =>{
            return action.payload;
        },
        removeUser: (state, action) =>{
            return null;
        }
    }
})

export const {addUser , removeUser} = userSlices.actions;
export default userSlices.reducer;