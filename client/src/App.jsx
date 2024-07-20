import { useEffect } from "react";
import axios from "axios"

function App() {

  const url = import.meta.env.VITE_BACKEND_URL;

  const getMovies = async ()=>{

    try{
      const movies = await axios.get(`${url}/api/v1/movies`);

      console.log(movies);
      
    }catch(err){
      console.log(err);
    }

  }

  useEffect(()=>{
    getMovies();
  },[])

  return (
    <>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
