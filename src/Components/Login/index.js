import React from 'react'
import Logo from '../../../src/Images/logo.jpeg'
import * as S from './styles'
import Table from '../Mesas'

export const Login = (props) => {
    
    const {setScreen} = props

    return (
        <S.Div>
            <div>
                <img src={Logo} />
                <p>Login:</p>
                <input></input>
                <input type="password"></input>
                <button onClick={()=>setScreen(()=>Table)}>Logar</button>
            </div>
        </S.Div>
    )
}

export default Login;
