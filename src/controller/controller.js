import { useEffect, useState } from "react";

export const FetchData=(path)=>{
  const [Data,setData]=useState([]);

  console.log(path);
  var url=`https://api.themoviedb.org/3/${path}?api_key=${process.env.API_KEY}`;

  console.log(url);
  

  useEffect(()=>{
    async function fetchMovies(){
      fetch(url)
      .then((res)=>res.json())
      .then((JsonData)=>setData(JsonData.results));      
    }

    fetchMovies();
    console.log(Data);
    
  },[url])
  return {Data}

}

