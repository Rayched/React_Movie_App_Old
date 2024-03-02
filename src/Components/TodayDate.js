
const TodayDate = () => {
    const Todays = new Date();

    const modifyNumber = (num) => {
        if (num < 10){
            return "0" + num;
        } else {
            return num;
        }
    }

    const weekday = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
    ];

    let year = Todays.getFullYear();
    let month = modifyNumber(Todays.getMonth() + 1);
    let date = modifyNumber(Todays.getDate());
    let day = weekday[Todays.getDay()];

    const NowDate = `${year}년 ${month}월 ${date}일 ${day}`;
    
    return (
        <div>
            <h4>{NowDate}</h4>
        </div>
    );
}

export default TodayDate;