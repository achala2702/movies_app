import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const TrailerPage = () => {

    const params = useParams();
    const key = params.trailerId;

  return (
    <div className="w-screen h-screen">
        <ReactPlayer controls={true} playing={true} url={`https://www.youtube.com/watch?v=${key}`} width="100%" height="100%" />
    </div>
  )
}

export default TrailerPage