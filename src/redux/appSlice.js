import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        fullname:"Guest",
        token:"",
        todo:[]
    }
})


export default appSlice.reducer;