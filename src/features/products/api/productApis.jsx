import { useQuery } from "@tanstack/react-query";
import { api } from "../../../config/api";
import axios from "axios";


export const getAllProductApi = async(search)=>
{
  try {

    let url = search?`/products/search?q=${search}`:"/products?Linit=100"

    let res = await api.get(url);
    return res.data;
  } catch (error) {
    console.log("Error in receiving products",error);
    
  }
}

export const getProductCategories = async()=>
{
    try {
    let res = await api.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log("Error in receiving products",error);
    
  }
}

export const getProductByCategory = async(category)=>
{
  try {
    let res = await api.get(`/products/category/${category}`)
    return res.data;
  } catch (error) {
    console.log("error in getting all product api",error); 
  }
}