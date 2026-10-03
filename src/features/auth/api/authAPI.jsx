import { api } from "../../../config/api";

export const loginUserApi = async(credentials)=>
{
  try {
    let res = await api.post("/auth/login",credentials);
    console.log("response from login api",res);
    localStorage.setItem('accessToken',res.data.accessToken)
    return res.data;
    
  } catch (error) {
  console.log("Error in API",error);
  
  }
};



export const hydrateUser = async()=>
{

};