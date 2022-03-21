import * as S from "./Style";
import { MdAdd } from 'react-icons/md';
import { useState } from "react";

export default function InputLayer(props: any) {
    const [text, setText] = useState("");

    const onChange = (e: any) => {
        setText(e.target.value);
    };

    const onSumbit = (e: any) => {
        if(!(text.replace(/ /gi, ""))) {
            return;
        } else if(e.key == "Enter" || e.type == "click"){
            props.onSumbit(text);
            setText("");
        }

    }


    return (
        <>
            <S.InputWrapper value={text} type="text" onChange={onChange} onKeyDown={onSumbit} maxLength={20} placeholder="할 일을 추가하세요 (20자까지 입력 가능)"/>
            <S.ButtonWrapper onClick={onSumbit}>
                <S.PlusWrapper>
                    <MdAdd style={{ width: "50px", height: "50px", margin: "15px" }} />
                </S.PlusWrapper>
            </S.ButtonWrapper>
        </>
    );
}

