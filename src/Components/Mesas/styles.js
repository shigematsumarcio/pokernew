import styled from 'styled-components'

export const Div = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:20%;
    cursor: pointer;
    @media screen and (max-Width:700px){
        margin-top:0px;
        flex-direction:column;
    }
    
    >div{
        margin:5px;
    }

`