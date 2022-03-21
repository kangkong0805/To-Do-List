import { HeaderWrapper } from "./Style"

const Header:React.FC = () => {

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    let dayOfWeek = week[now.getDay()];

    return (
        <HeaderWrapper className="abc">
            <h1>To_Do_List</h1>
            <h2>{year + "년 " + month + "월 " + day + "일"}</h2>
            <p>{dayOfWeek + "요일"}</p>
        </HeaderWrapper>
    );
}

export default Header;