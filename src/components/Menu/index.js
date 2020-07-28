import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo-HEITORFLIX.png';
import '../Menu/Menu.css';
import Button from '../Button';

//import ButtonLink from '../Menu/components/ButtonLink';

function Menu () {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="HeitorFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;