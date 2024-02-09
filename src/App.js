import { useEffect, useState } from "react";

function App() {
  const [Loading, setLoading] = useState(true);
  const [Movies, setMovies] = useState([]);

  const getMovies = async() => {
    const response = await fetch(
      "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=3a15c5393ac14d11f6b132d6a07f330c&targetDt=20240131"
    );
    const json = await response.json();
    setMovies(json.boxOfficeResult.weeklyBoxOfficeList);
    setLoading(false);
  } // then 문법 대체 (async, await 문법)
  /**
   * console에 movie가 두 번 보이는 이유는
   * setMovies(), setLoading() 함수를 통해 state 값을 변경
   * state 값이 변경됨에 따라 Re-rendering이 두 번 발생함.
   * 그래서 movie가 두 번 출력되는 것이다.
   */

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if(Movies.length === 0){
      return;
    } else {
      console.log(Movies)
    }
  }, [Movies])

  return (
    <div>
      {
        Loading ? <h3>주간 박스 오피스 데이터를 가져오는 중...</h3>
        :<div>
          {
            Movies.map((movie) => {
              return (
                <div key={movie.movieCd} className="movieInfo">
                  <h4>영화 명: {movie.movieNm}</h4>
                  <p>개봉 일: {movie.openDt}</p>
                  <p>누적 관객 수: {movie.audiAcc}명</p>
                </div>
              );
            })
          }
        </div>
      }
    </div>
  );
}

export default App;