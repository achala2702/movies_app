import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import Carousel from "react-material-ui-carousel";
import{Paper} from "@mui/material";
import "./hero.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Hero = () => {

    const {movies, loading} = useContext(MovieContext);

    if (loading){
        return <div>Loading..</div>
    }

    console.log(movies)

  return (
    <div className="w-screen bg-black">
        <Carousel>
            {movies.map((movie, index)=>(
              <Paper key={index}>
                <div className="h-screen w-screen bg-black flex flex-col items-center">
                  <div className="movie-card" style={{"--img":`url(${movie.backdrops[0]})`}}>
                    <div className="absolute w-screen h-screen flex flex-col md:flex-row-reverse md:justify-between md:items-start md:px-14 lg:px-20 items-center top-20 md:top-16 lg:top-20 gap-5 z-10">
                      <div className="h-48 lg:h-72 rounded-md">
                        <img className="h-full w-full rounded-md" src={movie.poster} alt="movie" />
                      </div>
                      <div>
                        <h1 className="text-white font-bold text-xl md:text-4xl lg:text-6xl">{movie.title}</h1>
                      </div>
                    </div>
                    <div className="absolute w-screen items-center z-10 flex flex-col bottom-52 md:bottom-72">
                      <PlayCircleOutlineIcon sx={{ color: 'gold', fontSize: 50 }} />
                    </div>
                  </div>
                </div>
              </Paper>
            ))}
        </Carousel>
    </div>
  )
}

export default Hero