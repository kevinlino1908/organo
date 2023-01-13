import './Formulario.css'
import CampoTexto from '../CampoTexto/Index';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
const Formulario = (props) => {
    const [nome, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setName('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>preencha os cards com os dados do colaborador</h2>
                <CampoTexto
                 obrigatorio={true} 
                 label='nome'
                 placeholder='Digite seu nome'
                 valor={nome}
                 aoAlterado={valor => setName(valor)}
                  />
                <CampoTexto 
                obrigatorio={true} 
                label='cargo' 
                placeholder='Digite seu cargo'
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                label='imagem' 
                placeholder='Digite o endereço da imagem'
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label='Time' 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
                
            </form>
        </section>
    )
}

export default Formulario