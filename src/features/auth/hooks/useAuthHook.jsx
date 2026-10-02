import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { loginUserApi } from "../api/authAPI";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";
export const useAuth = ()=>
{
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let {register,
    handleSubmit,
    reset,
    formState:{errors}} = useForm()

  const registerForm = (data) => {

    console.log("registered...",data);
    

  }
  const loginForm = async(data) => {
    try {
    //api call
    let response = await loginUserApi(data);
    dispatch(addUser(response));
    toast.success("User logged in...");
    } catch (error) {
      console.log("ERROR IN API",error); 
    }
    
  }



  return {
    navigate,
    register,
    handleSubmit,
    errors,
    registerForm,
    loginForm,
    }
}