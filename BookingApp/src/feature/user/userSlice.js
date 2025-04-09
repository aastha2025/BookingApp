import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    username: null,
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
        clearData: (state) =>{
            state.username = null;
            state.photo = null;
        },
    },
});


export const {setUsername, setPhoto, clearData} = userSlice.actions

export default userSlice.reducer;