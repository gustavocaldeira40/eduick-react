import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Media from 'react-media';

import ModalLogin from '../../modals/login';

import { Container, ContainerIcon, ContainerHeader, ContainerLogo, ImageLogo, TextMenu } from './style';

import Logo from '../../assets/main/logo.png';
import { Button } from '..';
import HamburgerIcon from '../../assets/icons/hamburger-icon.png';
import ModalMenu from '../../modals/menu';

export function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container>
      <ContainerHeader>
        <Media query="(max-width: 500px)">
          {(matches) =>
            matches && (
              <ContainerIcon onClick={() => setOpenMenu(true)}>
                <img src={HamburgerIcon} alt="icon menu" />
                {openMenu && <ModalMenu close={() => setOpenMenu(!openMenu)} open={openMenu} />}
              </ContainerIcon>
            )
          }
        </Media>
        <ContainerLogo>
          <ImageLogo src={Logo} style={{ padding: '20px' }} alt="logo" />
          <Link to="/Works">
            <TextMenu>How it works</TextMenu>
          </Link>
          <Link to="/About-us">
            <TextMenu>About Us</TextMenu>
          </Link>
        </ContainerLogo>

        <Media query="(min-width: 1200px)">
          {(matches) => (matches ? <Button content="Get Started" onClick={() => setOpenModal(true)} /> : null)}
        </Media>
        {openModal && (
          <ModalLogin close={() => setOpenModal(false)} open={openModal} title="Get Started" subTitle="Just Login" />
        )}
      </ContainerHeader>
    </Container>
  );
}
