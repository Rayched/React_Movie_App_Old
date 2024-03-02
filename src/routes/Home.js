import { useState } from "react";
import { useEffect } from "react";

import Movie from "../Components/Movie";

function Home(){
    const [Loading, setLoading] = useState(true);
    const [TodayNumber, setTodayNumber] = useState();
    const [Movies, setMovies] = useState([]);

    const getNowDate = () => {
        const modifyNumber = (num) => {
            if (num < 10){
                return "0" + String(num);
            } else {
                return num;
            }
        }

        const TodayDate = new Date();

        let year = TodayDate.getFullYear();
        let month = modifyNumber(TodayDate.getMonth() + 1);
        let date = modifyNumber(TodayDate.getDate());

        setTodayNumber(`${year}` + month + date);
    }

    const getMovies = async() => {
        const response = await fetch(
        "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=3a15c5393ac14d11f6b132d6a07f330c&targetDt=20240224"
        );
        const json = await response.json();
        setMovies(json.boxOfficeResult.weeklyBoxOfficeList);
        setLoading(false);
        //Before: '.then()'
        //After: 'aysnc await'
    }

    useEffect(() => {
        getMovies();
        getNowDate();
    }, []);
    
    useEffect(() => {
      if(Movies.length === 0){
        return;
      } else {
          console.log(Movies);
          console.log(TodayNumber);
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
                        <div key={movie.movieCd}>
                            <Movie
                                key={movie.movieCd}
                                id={movie.movieCd}
                                MovieName={movie.movieNm} 
                                openDate={movie.openDt} 
                                AudiCount={movie.audiAcc}
                            />
                        </div>
                        );
                    })}
                </div>
            }
        </div>
    );
}

export default Home;