import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, MovieName, openDate, AudiCount}){
    return (
        <div>
            <div>
                <h4>
                    <Link to={`/movie/${id}`}>
                        영화 명: {MovieName}
                    </Link>
                </h4>
                <p>개봉 일: {openDate}</p>
                <p>누적 관객 수: {AudiCount}명</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    MovieName: PropTypes.string.isRequired,
    openDate: PropTypes.string.isRequired,
    AudiCount: PropTypes.string
};

export default Movie; 