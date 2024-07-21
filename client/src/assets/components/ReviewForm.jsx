import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";

const ReviewForm = (movieId) => {

    const [review, setReview] = useState("");
    const { movies, loading } = useContext(MovieContext);
    const [currentMovie, setCurrentMovie] = useState();

    const findMovieByImdbId = (imdbId) => {
        setCurrentMovie(movies.find(movie => movie.imdbId === imdbId.movieId))
    };

    const url = import.meta.env.VITE_BACKEND_URL;
 
    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{

            const response = await axios.post(`${url}/api/v1/reviews`, {reviewBody: review, imdbId: String(movieId)});
            
            setTimeout(()=>{
                setReview("");
            }, 2000)

        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{

        if(!loading){
            findMovieByImdbId(movieId);
        }

    },[])

    if (loading) {
        return <div>Loading..</div>;
      }

  return (
    <div className="pt-12 w-3/4 md:w-1/2 flex flex-col gap-4 md:gap-10 text-white">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
            <label htmlFor="review">Write a review</label>
            <textarea className="text-black" id="review" name="review" value={review} onChange={(e)=>{setReview(e.target.value)}} rows={4}></textarea>
            <button className="bg-yellow-400 cursor-pointer text-lg p-4 flex items-center justify-center lg:text-2xl" type="submit">Submit</button>
        </form>
        <div className="text-xl">
            {currentMovie? currentMovie.reviewIds.map((review, index)=>(<p key={index} className="text-white">{review.body}</p>)):''}
        </div>
    </div>
  )
}

export default ReviewForm