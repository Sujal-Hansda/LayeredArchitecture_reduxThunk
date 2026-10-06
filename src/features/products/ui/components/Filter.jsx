import React, { useState } from "react";
import { useAllCategories } from "../../hooks/UseProductHooks";
const Filter = ({search,setSearch,category,setCategory}) => {



  let {data,isPending,error} = useAllCategories()

  if (isPending) return <h1>Loading Categories...</h1>
  

  return (
    <div className="mb-6 flex items-center justify-between gap-5 rounded-xl bg-white p-4 shadow-sm">
      {" "}
      {/* Search */}{" "}
      <div className="w-full max-w-md">
        {" "}
        <input value={search}
        onChange={(e)=>setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />{" "}
      </div>{" "}
      {/* Category */}{" "}
      <div className="w-full max-w-xs">
        {" "}
        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
        >
          {" "}
          <option value="all">All Categories</option>{" "}
          {data.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {" "}
              {cat.name}{" "}
            </option>
          ))}{" "}
        </select>{" "}
      </div>{" "}
    </div>
  );
};
export default Filter;
