import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ModalLogin from '../../modals/login';

import { ContainerHeader, ContainerLogo, ImageLogo, TextMenu } from './style';

import Logo from '../../assets/main/logo.png';
import { Button } from '..';

export function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ContainerHeader>
      <ContainerLogo>
        <ImageLogo src={Logo} style={{ padding: '20px' }} alt="logo" />
        <Link to="/Works">
          <TextMenu>How it works</TextMenu>
        </Link>
        <Link to="/About-us">
          <TextMenu>About Us</TextMenu>
        </Link>
      </ContainerLogo>
      <Button content="Get Started" onClick={() => setOpenModal(true)} />

      <ModalLogin close={() => setOpenModal(false)} open={openModal} title="Get Started" subTitle="Just Login" />
    </ContainerHeader>
  );
}
