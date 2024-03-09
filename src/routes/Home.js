import { useEffect, useState } from "react";
import Movie from "../Components/Movie";

const getDate = () => {
    const TodayDate = new Date();

    function modifyNumber(num){
        if(num < 10){
            return "0" + String(num);
        } else {
            return num;
        }
    }

    let year = TodayDate.getFullYear();
    let month = modifyNumber(TodayDate.getMonth() + 1);
    let date = modifyNumber(TodayDate.getDate() - 1);

    let NowDate = `${year}` + month + date;
    return NowDate;
}

function Home(){
    const [Loading, setLoading] = useState(true);
    const [Movies, setMovies] = useState([]);

    const TargetDate = getDate();

    const getMovies = async() => {
        const response = await (
            await fetch(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=3a15c5393ac14d11f6b132d6a07f330c&targetDt=${TargetDate}`)
        ).json();
        setMovies(response.boxOfficeResult.dailyBoxOfficeList);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    useEffect(() => {
        if(Movies.length == 0){
            return;
        } else {
            console.log(Movies);
            console.log(TargetDate);
        }
    })

    return (
        <div>
            {
                Loading ? <h3>일일 박스오피스 정보를 가져오는 중...</h3>
                : <div>
                    {
                        Movies.map((movie) => {
                            return (
                                <div key={movie.movieCd}>
                                    <Movie 
                                        id={movie.movieCd}
                                        MovieName={movie.movieNm}
                                        openDate={movie.openDt}
                                        AudiCount={movie.audiAcc}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            }
        </div>
    );
}

export default Home;