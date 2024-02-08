import { useEffect, useState } from "react";

function App() {
  const [Loading, setLoading] = useState(true);
  const [Movies, setMovies] = useState([]);

  useEffect(()=>{
    fetch(
      "	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=3a15c5393ac14d11f6b132d6a07f330c&targetDt=20240131"
    )
    .then((response) => response.json())
    .then((json)=>{
        setMovies(json.boxOfficeResult.weeklyBoxOfficeList);
        setLoading(false); 
    });
  }, []);

  useEffect(() => {
    if(Movies.length === 0){
      return;
    } else {
      console.log(Movies)
    }
  }, [Movies])

  return (
    <div className="App">
      {Loading ? <h3>로딩 중 입니다...</h3> : null}
    </div>
  );
}

export default App;