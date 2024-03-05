import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';

function CadastroCliente() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
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

    return (
        <div class="principal" style={{ margin: '0 20%' }}>
            <h1 style={{ textAlign: 'center' }}>Cadastro de Clientes</h1>
            <Card >
                <div className="cardPrincipal">
                    <label> Nome </label>
                    <InputText id="nome" value={nome} onChange={event => { setNome(event.target.value) }} />
                    <label>Endereco</label>
                    <InputText id="endereco" value={endereco} onChange={coletarEndereco} />
                    <label>Email</label>
                    <InputText id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <label>Data de Nascimento</label>
                    <Calendar id="dataNascimento" value={dataNascimento} onChange={(e) => { setDataNascimento(e.target.value) }} />
                    <Button label="Enviar" />
                </div>

            </Card>
        </div>
    );
}

export default CadastroCliente;