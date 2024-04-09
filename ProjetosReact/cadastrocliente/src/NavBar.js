import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Tela 1',
            icon: 'pi pi-home',
            command: () => navigate('/tela1')
        },
        {
            label: 'Tela 2',
            icon: 'pi pi-info',
            command: () => navigate('/tela2')
        }
    ];

    return (
        <div>
            <Menubar model={items} />
        </div>
    );
}

export default NavBar;
