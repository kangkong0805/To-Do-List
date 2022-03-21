import * as S from "./Style";
import { useEffect} from "react";

export default function List(props:any) {

    const lists = props.list;

    useEffect(() => {
        console.log(lists);
    })

    const onCheck = (key:any) => {
        props.check(key);
    }

    const onDelete = (key:any) => {
        props.delete(key);
    }

    return (

        lists.map((list:any, key: any) => (
            
            <S.ListWrapper key={key}>
                <S.CheckWrapper onClick={() => {onCheck(list.key)}}>
                    {list.check && <S.Done />}
                </S.CheckWrapper>

                <S.ListText>{list.text}</S.ListText>

                <S.Delete onClick={() => {onDelete(list.key)}}/>
            </S.ListWrapper>
        ))


    );
}