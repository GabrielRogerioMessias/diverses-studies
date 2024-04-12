import { useState } from 'react';
import './Cadastro.css';
import { Button } from 'primereact/button';
function GeneratePassword() {
    const [numberOfCharacters, setNumberOfCharacters] = useState(5);
    const [passwordGenerated, setPasswordGenerated] = useState('');
    const [viewPassword, setViewPassword] = useState(false)

    function getValue(event) {
        setNumberOfCharacters(event.target.value)
    }

    function GeneratePassword() {
        const password = generateRandomPassword(numberOfCharacters)
        setPasswordGenerated(password)
        setViewPassword(true)
    }
    function generateRandomPassword(quantityOfCharecters) {
        var charset = 'abcdefghijklmnopqrstuv123456789';
        var password = '';
        for (let i = 0; i < quantityOfCharecters; i++) {
            var indexCharset = Math.floor(Math.random() * charset.length)
            password += charset[indexCharset]
        }
        return password;
    }

    return (
        <main className='generate-password-container'>
            <div className='container-components'>
                <h1 className='title-components'>Password Generator</h1>
                <h1>Select the number os characters</h1>
                <input type='range' value={numberOfCharacters} min={5} max={20} onChange={getValue}></input>
                <p>{numberOfCharacters} characters</p>
                <Button onClick={GeneratePassword}>Generate</Button>
                {viewPassword && (
                    < div className='result-components'>
                        <h1>Password:</h1>
                        <p>{passwordGenerated}</p>
                    </div>
                )
                }
            </div>
        </main >
    )
}
export default GeneratePassword;