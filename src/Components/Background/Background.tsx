import { FC } from "react";
import Header from "../Header/Header";
import * as S from "./Style";

const Background:FC = () => {
    return(
        <S.OutsideWrapper>
            <S.InsideWrapper>
                <Header/>
            </S.InsideWrapper>
        </S.OutsideWrapper>
    );
}

export default Background;