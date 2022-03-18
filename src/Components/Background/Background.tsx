import { FC } from "react";
import Header from "../Header/Header";
import * as S from "./Style";

type Props = React.PropsWithChildren<{}>;

export default function Background({children}: Props) {
    return(
        <S.OutsideWrapper>
            <S.InsideWrapper>
                {children}
            </S.InsideWrapper>
        </S.OutsideWrapper>
    );
}