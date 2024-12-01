import { useEffect, useState } from "react";

export const FetchData=(path)=>{
  const [Data,setData]=useState([]);
  const API_KEY="be90e85639aad5bb19bc5325c8c23b45"
  console.log(path);
  var url=`https://api.themoviedb.org/3/${path}?api_key=${API_KEY}`;

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

