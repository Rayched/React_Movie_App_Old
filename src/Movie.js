import { ReactPropTypes } from "react";

function Movie({MovieName, openDate, AudiCount}){
    return (
        <div>
            <h4>영화 명: {MovieName}</h4>
            <p>개봉 일: {openDate}</p>
            <p>누적 관객 수: {AudiCount}명</p>
        </div>
    );
}

Movie.ReactPropTypes = {
    MovieNameL: ReactPropTypes.string.isRequired,
    openDate: ReactPropTypes.string.isRequired,
    AudiCount: ReactPropTypes.string
}

export default Movie; 