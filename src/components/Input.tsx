import { useState } from "react"

export function Input() {
    const [mensagem, setMensagem] = useState('')
    const [entrada, setEntrada] = useState('')

    function Fibonacci() {
        const valor = parseInt(entrada)
        const sequencia = [0, 1]
        let i = 0
        for(;;) {  
            let proximoValor = sequencia[i] + sequencia [i + 1]
            
            if (sequencia[i] === valor){
                setMensagem("O valor " + valor + " faz parte da sequência de Fibonacci!")
                break
            }
            else if (sequencia[i] > valor){
                setMensagem("O valor " + valor + " não faz parte da sequência de Fibonacci!")
                break
            }
            else {
                sequencia.push(proximoValor)
                i += 1
                console.log(i)
            }
        }
    }
    return (
        <>
            <div className="app">
                <h1>Sequência de Fibonacci</h1>
                <h3>Digite um número qualquer para saber se ele faz parte ou não da Sequência de Fibonacci</h3>
                <input type="text" placeholder="Digite um número" value={entrada} onChange={(e) => setEntrada(e.target.value)}/>
                <button onClick={Fibonacci}>Enviar</button>
                <h2>{mensagem}</h2>
            </div>
        </>
    )
}