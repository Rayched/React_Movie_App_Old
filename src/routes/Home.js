import { useState } from "react";
import { useEffect } from "react";

import Movie from "../Components/Movie";

function Home(){
    const [Loading, setLoading] = useState(true);
    const [Movies, setMovies] = useState([]);

    const getMovies = async() => {
        const response = await fetch(
        "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=3a15c5393ac14d11f6b132d6a07f330c&targetDt=20240131"
        );
        const json = await response.json();
        setMovies(json.boxOfficeResult.weeklyBoxOfficeList);
        setLoading(false);
        //Before: '.then()'
        //After: 'aysnc await'
    }

    useEffect(() => {
        getMovies();
      }, []);
    
      useEffect(() => {
        if(Movies.length === 0){
          return;
        } else {
          console.log(Movies)
        }
      }, [Movies]);
    
    return (
        <div>
            {
                Loading ? <h3>주간 박스 오피스 데이터를 가져오는 중...</h3>
                :<div>
                { 
                    Movies.map((movie) => { 
                    return (
                        <Movie
                        key={movie.movieCd}
                        MovieName={movie.movieNm} 
                        openDate={movie.openDt} 
                        AudiCount={movie.audiAcc}
                        />);
                    })}
                </div>
            }
        </div>
    );
}

export default Home;