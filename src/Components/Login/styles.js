import styled from 'styled-components'

export const Div = styled.div`
    margin-top: 20%;
    >div{
        display:flex;
        align-items:center;
        flex-direction:column; 
        >input{
            margin:5px;
            height:20px;
        }
        >button{
            margin-top:15px;
            background-color: #ce9595;
            border-radius:40px;
            padding:5px 20px;
            outline:none;
        }  
    }
`