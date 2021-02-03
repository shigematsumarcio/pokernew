import React, { useState } from 'react'
import * as S from './styles'

function Form(props) {

    const [tenThousand, setTenThousand] = useState(null)
    const [fiveThousand, setFiveThousand] = useState(null)
    const [oneThousand, setOneThousand] = useState(null)
    const [fiveHund, setFiveHund] = useState(null)
    const [oneHund, setOneHund] = useState(null)
    const [twentyFive, setTwentyFive] = useState(null)
    const [five, setFive] = useState(null)
    const [valorFinal, setValorFinal] = useState(0)
    const [diferenca, setDiferenca] = useState(0)

    const [selectCrupie, setCrupie] = useState(null)
    const [selectJogos, setJogos] = useState(null)
    var [vlMesa, setVlMesa] = useState(null)

    const somaValor = ()=>{
        let dezMil     = 0 
        let cincoMil   = 0 
        let mil        = 0 
        let quinhentos = 0 
        let cem        = 0 
        let vinteCinco = 0 
        let cinco      = 0 

        if (tenThousand != null) {
            dezMil = parseInt(tenThousand) * 10000; 
        }

        if (fiveThousand != null) {
            cincoMil = parseInt(fiveThousand) * 5000;
        }

        if (oneThousand != null) {
            mil = parseInt(oneThousand) * 1000; 
        }

        if (fiveHund != null) {
            quinhentos = parseInt(fiveHund) * 500; 
        }

        if (oneHund != null) {
            cem = parseInt(oneHund) * 100; 
        }

        if (twentyFive != null) {
            vinteCinco = parseInt(twentyFive) * 25;
        }
 
        if (five != null) {
            cinco = parseInt(five) * 5; 
        }

        let totalFichas = (dezMil + cincoMil + mil + quinhentos + cem + vinteCinco + cinco)

        setDiferenca(Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalFichas))
        
        let vlMesaInt = 0
        vlMesaInt = vlMesa.replace(/([^\d])+/gim, '');

        if (vlMesaInt != null && vlMesaInt != '') {
            totalFichas += parseInt(vlMesaInt)      
        }

        setValorFinal(Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalFichas))

        setVlMesa(Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(vlMesaInt))
    }

    const limpaCampos = () => {
        setVlMesa('')   
    }

    return (
        <>     
         
        {
            /* aqui vc vai colocar os selects da forma que quiser

                Value do select crupie é o ID do crupie salvo na tabela de crupie
                Value do select jogos é o ID dos jogos salvo na tabela de jogos
            */
        }
            <S.Div>
                <div>
                    <div>
                        <label>Crupiê &nbsp;</label>
                    </div>
                    <br/>
                    <div>
                        <select value={selectCrupie} onChange={(e)=>setCrupie(e.target.value)}>
                          <option value="1">José</option>
                          <option value="2">Marcos</option>
                          <option value="3">Carlos</option>
                        </select>
                    </div>
                </div>
                <br />
                <div>
                    <div>
                        <label>Jogos &nbsp;</label>
                    </div>
                    <br/>
                    <div>
                        <select value={selectJogos} onChange={(e)=>setJogos(e.target.value)}>
                          <option value="1">Blackjack</option>
                          <option value="2">Roleta</option>
                          <option value="3">Truco</option>
                        </select>
                    </div>
                </div>
                <br />
                <div>
                    <p>Valor Mesa</p>
                    <input value={vlMesa}  onFocus={limpaCampos} onChange={(e)=>setVlMesa(e.target.value)} min='0' type='text'></input>
                </div>
                <br />
                <div>
                    <p>R$ 10.000</p>
                    <input value={tenThousand} onChange={(e)=>setTenThousand(e.target.value)} min='0' type='number'></input>
                </div>
                <div>
                <p>R$ 5.000</p>
                    <input value={fiveThousand} onChange={(e)=>setFiveThousand(e.target.value)} min='0' type='number'></input>
                </div>
                <div>
                <p>R$ 1.000</p>
                    <input value={oneThousand} onChange={(e)=>setOneThousand(e.target.value)} min='0' type='number'></input>
                </div>
                <div>
                <p>R$ 500</p>
                    <input value={fiveHund} onChange={(e)=>setFiveHund(e.target.value)} min='0' type='number'></input>
                </div>
                <div>
                <p>R$ 100</p>
                    <input value={oneHund} onChange={(e)=>setOneHund(e.target.value)} min='0' type='number'></input>
                </div>
                <div>
                <p>R$ 25</p>
                    <input value={twentyFive} onChange={(e)=>setTwentyFive(e.target.value)} min='0' type='number'></input>
                </div>
                <div>
                <p>R$ 5</p>
                    <input value={five} onChange={(e)=>setFive(e.target.value)} min='0' type='number'></input>
                </div>
                <br/>
                <br/>
                <p>Diferença: {diferenca}</p>
                <p>Valor Final: {valorFinal}</p>
                <button onClick={somaValor}>Salvar</button>
            </S.Div>

        </>
    )
}

export default Form
