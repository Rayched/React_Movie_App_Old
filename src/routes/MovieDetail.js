import { useParams } from "react-router-dom";

function MovieDetail(){
    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <h4>Detail</h4>
        </div>
    );
}

export default MovieDetail;