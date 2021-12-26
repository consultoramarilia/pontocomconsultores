import React from 'react';
import logoImg from '../../assets/logo.svg';
import { ContainerNav, Header } from './style';
import { NavLink } from 'react-router-dom';
import logoSvg from '../../assets/logo.svg';

const HeaderComponent:React.FC = () => {
  return (
    <Header>
      <ContainerNav>
        <img src={logoSvg} />
      </ContainerNav>
    </Header>
  )
}

export default HeaderComponent;