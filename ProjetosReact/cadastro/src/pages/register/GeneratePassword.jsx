import './Cadastro.css'
import { InputText } from 'primereact/inputtext';
function GeneratePassword() {

    return (
        <main className='generate-password-container'>
            <div className='container-components'>
                <h1 className='title-components'>Password Generator</h1>
                <span>
                    <InputText ></InputText>
                    <label htmlFor="Digite"></label>
                </span>

            </div>
        </main>
    )
}
export default GeneratePassword;