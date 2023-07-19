import React from "react";
import { useState } from "react";


function App ()  {

  const[location,setLocation]=useState('')
  const[temp,setTemp]=useState('')
  


  const locationformhandler=async(e)=>{
    e.preventDefault();
      const response = await fetch(` http://api.weatherapi.com/v1/current.json?key=765e9e069a874eddbea61037231907&q=${location}`);
      const data = await response.json();
      setTemp(data.current.temp_c);
  }
 
 
 
 
 
 
 
  return(
  

  
  <div className="w-[100%] h-[100vh] gap-20 flex flex-col bg-slate-800  justify-center">
      <h1 className="text-3xl w-1/2 flex  items-center justify-center">Weather Api</h1>
      
<form onSubmit={locationformhandler}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for location"
            required
            onChange={(e)=>setLocation(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <span className='text-3xl text-white'>{temp}</span>
    </div>

 )
};

export default App;
