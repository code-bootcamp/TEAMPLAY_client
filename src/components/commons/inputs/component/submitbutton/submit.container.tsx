import styled from "@emotion/styled";

const ButtonStyle = styled.button`
    width: 100%;
    padding: 10px 0;
    background-color:#a7a7a7;
    color: #dedede;
    border-radius:26px;
    font-size: 20px;
    margin:40px 0 15px;
    margin-right:8px;
    font-family: normal;
`

interface IPropsSubmitButton {
    btnvalue: string;
}

export default function SubmitButton(props: IPropsSubmitButton) {
    return (
        <ButtonStyle>
            {props.btnvalue}
        </ButtonStyle>
    )
}