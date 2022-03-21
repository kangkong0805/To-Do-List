import { useRef, useState } from 'react';
import Background from '../Components/Background/Background';
import Header from '../Components/Header/Header';
import InputLayer from '../Components/InputLayer/InputLayer';
import List from '../Components/List/List';

export default function HomePage() {

    const nextId = useRef(0);
    const [lists, setLists] = useState([{
        key: nextId.current,
        text: "To-Do list",
        check: false,
    }]);

    const addList = (text: any) => {
        nextId.current += 1;
        setLists(lists.concat({key : nextId.current, text: text, check: false}));
    }

    const onCheck = (key:any) => {
        setLists(
            lists.map((list) => {
                if(list.key == key) {
                    list.check = !list.check;
                }
                return list;
            })
        )
    }

    const onDelete = (key:any) => {
        setLists(lists.filter((list) => list.key != key))
    }

    return (
        <Background>
            <Header />
            <List list={lists} check={onCheck} delete={onDelete}/>
            <InputLayer onSumbit={addList}/>
        </Background>
    );
}

