import { useContext } from "react";
import styled from "@emotion/styled";
import { ProjectContext } from "../../projectNew.container";

const AddBox = styled.div`
    display: flex;
    align-items: center;
    margin:0 20px;
    & > div{
        width:2.571rem;
        display: flex;
        justify-content: center;
    }
    & > button{
        background-color: #3894FF;
        color:#fff;
        padding:3px 10px;
    }
`

export default function Addbox() {
    const {
        positonMinus,
        positionAdd,
        positionCount
    } = useContext(ProjectContext)
    return (
        <AddBox>
            <button onClick={positionAdd}>+</button>
            <div>{positionCount}</div>
            <button onClick={positonMinus}>-</button>
        </AddBox>
    );
}
