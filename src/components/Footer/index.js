import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
       <Link to="/">
      <img className="Logo" src={Logo} alt="blackflix logo" />
      </Link>
      <p>
        Orgulhosamente desenvolvido pela 
        {' '}
        <a title="Site da Jennyffer" href="https://jennyffermorais.github.io">
         Jennyffer  
        </a>
        {' '}
        durante a
        {' '}
        <a title="Site de Alura" href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
