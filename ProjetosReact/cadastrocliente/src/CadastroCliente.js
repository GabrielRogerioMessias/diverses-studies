import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import axios from 'axios';
import { Column } from 'primereact/column';
import 'primeicons/primeicons.css';

function CadastroCliente() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');
    const [cities, setCities] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [atualizar, setAtualizar] = useState(false);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [id, setId] = useState('');

    const coletarEndereco = (event) => {
        setEndereco(event.target.value);
        console.log('Endereco: ' + endereco);
    };

    const enviarDados = () => {
        const novoDadosDoForm = {
            nome: nome,
            endereco: endereco,
            dataNascimento: dataNascimento,
            email: email,
            cidadeSelecionada: cidadeSelecionada
        };

        const incluirDados = async () => {
            try {
                if (modoEdicao === false) {
                    const response = await axios.post('http://localhost:4000/clientes', novoDadosDoForm);
                    console.log('Resposta da API:', response.data);
                    setAtualizar(true);
                    limparCampos()
                }
                if (modoEdicao === true) {
                    const cliente = { id: id }; // Assuming 'cliente' is the client you're editing
                    var API_URL = `http://localhost:4000/clientes/${cliente.id}`;
                    const response = await axios.put(API_URL, novoDadosDoForm);
                    setModoEdicao(false);
                    setAtualizar(true)
                    limparCampos()
                }
                // Handle the API response as necessary
            } catch (error) {
                console.error('Erro ao enviar dados paraa API:', error);
                // Handle the request error as necessary
            }
        };
        incluirDados();
    };

    useEffect(() => {
        buscarDados();
        listarClientesAPI();
        setAtualizar(false);
    }, [atualizar]);

    const buscarDados = async () => {
        try {
            var API_URL = 'http://localhost:4000/cidades';
            const response = await axios.get(API_URL);
            console.log(response.data);
            setCities(response.data);
        } catch (error) {
            console.log('Não foi possivel carregar os dados de: ' + API_URL + ' error: ' + error);
        }
    };

    const deletarUser = async (cliente) => {
        try {
            var API_URL = `http://localhost:4000/clientes/${cliente.id}`;
            const response = await axios.delete(API_URL);
            if (response.status === 200) {
                setAtualizar(true);
            }
        } catch (error) {
            console.log('Não foi possivel excluir o cliente com id: ' + cliente.id);
        }
    };

    const limparCampos = () => {
        setNome('');
        setEndereco('');
        setEmail('');
        setDataNascimento('');
        setCidadeSelecionada('');
        setModoEdicao(false);
        setId('');
    };
    const editarUser = async (rowData) => {
        setModoEdicao(true);
        setEndereco(rowData.endereco);
        setEmail(rowData.email);
        setNome(rowData.nome);
        setDataNascimento(rowData.dataNascimento);
        setId(rowData.id);
    };

    const listarClientesAPI = async () => {
        try {
            var API_URL_CLIENTES = 'http://localhost:4000/clientes';
            const response = await axios.get(API_URL_CLIENTES);
            setClientes(response.data);
        } catch (error) {
            console.log('Não foi possivel carregar os dados dos clientes da: ' + API_URL_CLIENTES + ' error: ' + error);
        }
    };

    return (
        <div className="principal" style={{ margin: '0 20%' }}>
            <h1 id="title" style={{ textAlign: 'center' }}>Cadastro de Clientes</h1>
            <Card>
                <div className="cardPrincipal">
                    <div className='limpar-dados'>
                        <Button label='Limpar' onClick={() => limparCampos()}></Button>

                    </div>


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
            <DataTable value={clientes}>
                <Column field='id' header='Id Usuário'></Column>
                <Column field='nome' header='Nome Usuário'></Column>
                <Column field='endereco' header='Endereço'></Column>
                <Column field='email' header='Email'></Column>
                <Column header='Ações' body={(rowData) => (
                    <div>
                        <Button icon='pi pi-trash' onClick={() => deletarUser(rowData)}></Button>
                        <Button icon='pi pi-pencil' onClick={() => editarUser(rowData)}></Button>
                    </div>)} />
            </DataTable>
        </div>
    );
}

export default CadastroCliente;
