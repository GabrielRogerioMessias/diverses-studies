import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';

function CadastroCliente() {
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [email, setEmail] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [cidadeSelecionada, setCidadeSelecionada] = useState('')

    const coletarNome = (event) => {
        setNome(event.target.value)
        console.log('name: ' + nome)
    }
    const coletarEndereco = (event) => {
        setEndereco(event.target.value)
        console.log('Endereco: ' + endereco)
    }
    const enviarDados = () => {
        console.log('Enviando dados para o banco de Dadoss')
        console.log('' + nome)
    }
    const cidades = [
        { label: 'Ourinhos', value: 'OU' },
        { label: 'Joaquim-Tavorá', value: 'JT' },
        { label: 'Santo-Antônio', value: 'SAP' }
    ]

    return (
        <div className="principal" style={{ margin: '0 20%' }}>
            <h1 style={{ textAlign: 'center' }}>Cadastro de Clientes</h1>
            <Card>
                <div className="cardPrincipal">
                    <label className='labelInput'> Nome </label>
                    <InputText className="input" value={nome} onChange={event => { setNome(event.target.value) }} />

                    <label className='labelInput'>Endereco</label>
                    <InputText className="input" value={endereco} onChange={coletarEndereco} />

                    <label className='labelInput'> Email</label>
                    <InputText className="input" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                    <Dropdown value={cidadeSelecionada} options={cidades} onChange={(e) => { setCidadeSelecionada(e.value) }} placeholder="Selecione a Cidade" />

                    <label className='labelInput'> Data de Nascimento</label>
                    <Calendar id="dataNascimento" value={dataNascimento} onChange={(e) => { setDataNascimento(e.target.value) }} />
                    <Button label="Enviar" onClick={enviarDados} />
                </div>
            </Card>
        </div>
    );
}

export default CadastroCliente;
