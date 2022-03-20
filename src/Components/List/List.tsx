import { CheckWrapper, ListText, ListWrapper } from "./Style";
import { MdDone, MdDelete } from 'react-icons/md';
import { useEffect, useState } from "react";
import styled from "styled-components";

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
            
            <ListWrapper key={key}>
                <CheckWrapper onClick={() => {onCheck(list.key)}}>
                    {list.check && <MdDone style={{ width: "24px", height: "24px", margin: "7px" }} />}
                </CheckWrapper>

                <ListText>{list.text}</ListText>
                <MdDelete onClick={() => {onDelete(list.key)}} style={{ position: "absolute", right: "20px" }}/>
            </ListWrapper>
        ))


    );
}