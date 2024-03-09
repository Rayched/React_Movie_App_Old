
const TodayDate = () => {
    const Todays = new Date();

    const modifyNumber = (num) => {
        if (num < 10){
            return "0" + num;
        } else {
            return num;
        }
    }

    let year = Todays.getFullYear();
    let month = modifyNumber(Todays.getMonth() + 1);
    let date = modifyNumber(Todays.getDate() - 1);

    const NowDate = `${year}년 ${month}월 ${date}일`;
    
    return (
        <div>
            <h4>{NowDate} 기준</h4>
        </div>
    );
}

export default TodayDate;