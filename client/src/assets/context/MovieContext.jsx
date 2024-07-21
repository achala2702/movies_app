import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({children})=>{
    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(true);

    const url = import.meta.env.VITE_BACKEND_URL;

    const getMovies = async ()=>{

        try{
          const response = await axios.get(`${url}/api/v1/movies`);
    
          setMovies(response.data);
          
        }catch(err){
          console.log(err);
        }finally{
            setLoading(false)
        }
    
      }

      useEffect(()=>{
        getMovies();
      },[]);

      return (
        <MovieContext.Provider value={{movies, loading}}>
            {children}
        </MovieContext.Provider>
      );
};

export default MovieContext;