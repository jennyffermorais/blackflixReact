import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a title="jennyffermorais.github.io" href="https://jennyffermorais.github.io">
      <img className="Logo" src={Logo} alt="blackflix logo" />
      </a>
      <p>
        Orgulhosamente desenvolvido pela Jennyffer durante a
        {' '}
        <a title="Site de Alura" href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
