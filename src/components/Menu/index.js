import React from 'react';
import Logo from '../../assets/img/Logo-HEITORFLIX.png';
import '../Menu/Menu.css';
import Button from '../Button';

//import ButtonLink from '../Menu/components/ButtonLink';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="HeitorFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;