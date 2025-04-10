import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    username: null,
    email: null,
    photo: null,
}


const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        setUsername: (state,action) => {
            state.username = action.payload
        },
        setPhoto: (state, action) => {
            state.photo = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        clearData: (state) =>{
            state.username = null;
            state.photo = null;
            state.email = null;
        },
    },
});


export const {setUsername, setPhoto,setEmail, clearData} = userSlice.actions

export default userSlice.reducer;