import React from 'react'
import Mesa from '../../Images/mesa.jpeg'
import * as S from './styles'
import Form from '../Formulario'

const Table = (props) => {
    const {setScreen}=props;
    return (
        <S.Div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>nome da Mesa</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>nome da Mesa</p>
            </div>
            <div>
                <img onClick={()=>setScreen(()=>Form)} src={Mesa} />
                <p>nome da Mesa</p>
            </div>
            
        </S.Div>
    )
}

export default Table;


