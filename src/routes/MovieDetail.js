import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * 
 * MovieDetail 구조 변경 필요
 * 
 * (제목) (본문) (검색)
 */
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
        if (MovieInfo.length == 0){
            return;
        } else {
            console.log(MovieInfo);
        }
    }, [MovieInfo])

    let openDt = String(MovieInfo.openDt);
    const ChgOpenDt = [
        openDt.slice(0, 4) + "년", 
        openDt.slice(4, 6) + "월",
        openDt.slice(6, 8) + "일"
    ].join(" ");

    return (
        <div>
            {
                Loading ? <h3>영화 정보를 가져오고 있습니다...</h3>
                :<div className="MovieDetails">
                    <div className="MovieNmBox">
                        <h3 className="MovieNm">
                            {MovieInfo.movieNm} / {MovieInfo.movieNmEn}
                        </h3>
                    </div>
                    <p>개봉: {ChgOpenDt}</p>
                    <p>러닝 타임: {MovieInfo.showTm}분</p>
                    <p>
                        감독: {MovieInfo.directors[0].peopleNm}
                        / {MovieInfo.directors[0].peopleNmEn}
                    </p>
                    <div className="Genres">
                        <p>
                            장르: {
                                MovieInfo.genres.map((genre, idx) => {
                                    if (idx + 1 == MovieInfo.genres.length){
                                        return <span>{genre.genreNm} </span>
                                    } else {
                                        return <span>{genre.genreNm}, </span>
                                    }
                                })
                            }
                        </p>
                    </div>
                    <div className="actors">
                        {
                            MovieInfo.actors.length == 0 ? <h5>출연 배우 없음</h5>
                            : <div>
                                {
                                    <div>
                                        <p>출연 배우</p>
                                        <ul>
                                        {
                                            MovieInfo.actors.map((actor, idx) => {
                                                for (let i = 0; i <= 5; i++){
                                                    if (idx <= 5){
                                                        return (
                                                            <li>
                                                                {actor.peopleNm} / {actor.peopleNmEn}
                                                            </li>
                                                        );
                                                    } else {
                                                        return;
                                                    }
                                                }
                                            })
                                        }
                                        </ul>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                    <div className="SearchBtn">
                            <a href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${MovieInfo.movieNm}`}>
                                네이버 검색
                            </a>
                    </div>
                </div>
            }
        </div>
    );
}

export default MovieDetail;