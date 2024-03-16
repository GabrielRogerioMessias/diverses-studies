import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios';

function CadastroCliente() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');
    const [cities, setCities] = useState([]);
    //Fazer Post na Api
    const [dadosDoForm, setDadosDoForm] = useState({
        //dados que vamos enviar para a API
        nome: '',
        endereco: ''
    });


    const coletarEndereco = (event) => {
        setEndereco(event.target.value)
        console.log('Endereco: ' + endereco)
    }

    const enviarDados = () => {
        setDadosDoForm((dadosDoForm) => ({
            ...dadosDoForm,
            nome: nome,
            endereco: endereco
        }));

    }

    useEffect(() => {
        // Carregar dados da API, de maneira assincrona (tela abre, e a requisição já começa a buscar os dados)
        const buscarDados = async () => {
            try {
                var API_URL = 'http://localhost:4000/cidades'
                const response = await axios.get(API_URL)
                console.log(response.data)
                // const cidadesFormatadas = response.data.map(city => ({
                //     label: city.nomecidade,
                //     label: city.id,
                // }))
                // setCities(cidadesFormatadas)
                setCities(response.data)
            } catch (error) {
                console.log('Não foi possivel carregar os dados de: ' + API_URL)
            }
        }
        buscarDados();
    }
        ,)


    return (
        <div className="principal" style={{ margin: '0 20%' }}>
            <h1 id="title" style={{ textAlign: 'center' }}>Cadastro de Clientes</h1>
            <Card>
                <div className="cardPrincipal">
                    <label className='labelInput'> Nome </label>
                    <InputText className="input" value={nome} onChange={event => { setNome(event.target.value) }} />

                    <label className='labelInput'>Endereco</label>
                    <InputText className="input" value={endereco} onChange={coletarEndereco} />

                    <label className='labelInput'> Email</label>
                    <InputText className="input" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                    <Dropdown value={cidadeSelecionada} options={cities} onChange={(e) => { setCidadeSelecionada(e.value) }} placeholder="Selecione a Cidade" optionLabel='nomecidade' />

                    <label className='labelInput'> Data de Nascimento</label>
                    <Calendar id="dataNascimento" value={dataNascimento} onChange={(e) => { setDataNascimento(e.target.value) }} />
                    <Button className="button" label="Enviar" onClick={enviarDados} />
                </div>
            </Card>
        </div>
    );
}

export default CadastroCliente;
