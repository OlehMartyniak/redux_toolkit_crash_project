import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0',name:'Dude Lebowski'},
    {id:'1',name:'Neil Young'},
    {id:'2',name:'Dave Gray'}
];
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

const selectAllUsers = (state) => state.users;
const {reducer: usersReducer} = usersSlice;

export {selectAllUsers,usersReducer};