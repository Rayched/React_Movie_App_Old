import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail(){
    const [Loading, setLoading] = useState(true);
    const [MovieInfo, setMovieInfo] = useState([]);
    const {id} = useParams();

    const getMovieDetail = async() => {
        const MovieData= await(
            await fetch(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=3a15c5393ac14d11f6b132d6a07f330c&movieCd=${id}`)
        ).json();
        setMovieInfo(MovieData.movieInfoResult.movieInfo);
        setLoading(false);
    };

    useEffect(() => {
        getMovieDetail();
    }, []);

    useEffect(() => {
        if (MovieInfo.length === 0){
            return;
        } else {
            console.log(MovieInfo);
        }
    }, [MovieInfo])

    return (
        <div>
            {
                Loading ? <h3>영화 정보를 가져오고 있습니다...</h3>
                :<div>
                    <h3>
                        <a 
                            href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${MovieInfo.movieNm}`}
                            target="_blank"
                        >
                            {MovieInfo.movieNm} / {MovieInfo.movieNmEn}
                        </a>
                    </h3>
                    <p>개봉 일: {MovieInfo.openDt}</p>
                    <p>상영 시간: {MovieInfo.showTm}분</p>
                    <p>감독: {MovieInfo.directors[0].peopleNm}</p>
                    <div>
                        <p>출연 배우</p>
                        <ul>
                            {
                                MovieInfo.actors.map((actor)=>{
                                    return <li>{actor.peopleNm}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <p>장르</p>
                        <ul>
                            {
                                MovieInfo.genres.map((genre) => {
                                    return (
                                        <li>{genre.genreNm}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
}

export default MovieDetail;