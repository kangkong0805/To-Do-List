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