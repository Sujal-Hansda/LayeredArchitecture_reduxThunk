import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name:"auth",
  initialState:{
    user:null,
    isAuthenicated:false,
    isLoading:true,
  },
  reducers:{
    addUser:(state,action)=>{
      state.user =  action.payload,
      state.isAuthenicated= true;
      state.isLoading=false;
    },
    removeUser:(state)=>
    {
      state.user = null,
      state.isAuthenicated= false;
    }
  }
})

export const {addUser,removeUser} = authSlice.actions
export default authSlice.reducer;