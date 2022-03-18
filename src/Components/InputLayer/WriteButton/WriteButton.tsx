import { ButtonWrapper, PlusWrapper } from "./Style";
import { MdAdd } from 'react-icons/md';
import { useState } from "react";

const WriteButton: React.FC = () => {
    const [rotation, setRotation] = useState(false);

    return (
        <ButtonWrapper onClick={() => {setRotation(!rotation)}}>
            <PlusWrapper>
                <MdAdd style={{width: "50px", height: "50px", margin: "15px"}}/>
            </PlusWrapper>
        </ButtonWrapper>
    );
}

export default WriteButton;