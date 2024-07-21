import { useEffect, useRef, useContext, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

const ReviewPage = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const movieId = params.movieId;

  const url = import.meta.env.VITE_BACKEND_URL;

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/movies/${movieId}`);

      setMovie(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div className="bg-black w-screen pt-20 h-screen">
      <div className="w-screen h-screen flex flex-col md:flex-row md:justify-center md:items-start md:gap-10 lg:gap-28 items-center">
        <div className="h-48 lg:h-80 md:pt-20 md:h-72 rounded-md">
          <img
            className="h-full rounded-md"
            src={movie.poster}
            alt={movie.title}
          />
        </div>
        <ReviewForm movieId={movieId} />
      </div>
    </div>
  );
};

export default ReviewPage;
