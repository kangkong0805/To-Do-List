import * as S from "./Style";
import { MdAdd } from 'react-icons/md';
import { useState } from "react";

export default function InputLayer(props: any) {
    const [text, setText] = useState("");

    const onChange = (e: any) => {
        setText(e.target.value);
    };

    const onSumbit = (e: any) => {
        if(!text) {
            return;
        } else if(e.key == "Enter" || e.type == "click"){
            props.onSumbit(text);
            setText("");
        }
    }


    return (
        <>
            <S.InputWrapper value={text} onChange={onChange} onKeyDown={onSumbit}/>
            <S.ButtonWrapper onClick={onSumbit}>
                <S.PlusWrapper>
                    <MdAdd style={{ width: "50px", height: "50px", margin: "15px" }} />
                </S.PlusWrapper>
            </S.ButtonWrapper>
        </>
    );
}

