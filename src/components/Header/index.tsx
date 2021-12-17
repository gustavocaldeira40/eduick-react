import React, { useState } from 'react'
import Media from 'react-media'
import { Avatar } from '@material-ui/core'

import ModalLogin from '../../modals/login'

import {
  Container,
  ContainerIcon,
  ContainerHeader,
  ContainerLogo,
  ImageLogo,
  ContainerButton,
  LinkPersonalized,
} from './style'

import Logo from '../../assets/main/logo.png'
import { Button } from '..'
import HamburgerIcon from '../../assets/icons/hamburger-icon.png'
import ModalMenu from '../../modals/menu'
import AvatarIcon from '../../assets/icons/avatar-icon.png'

type HeaderProps = {
  background?: string
  widthHeader?: string | number
  widthButton?: string | number
  colorButton?: string
  textButton?: string
  backgroundbutton?: string
  haveAvatar?: boolean
  children?: any
  disabledButton?: boolean
}

export function Header({
  background,
  widthHeader,
  widthButton,
  colorButton,
  textButton,
  backgroundbutton,
  haveAvatar,
  children,
  disabledButton,
}: HeaderProps) {
  const [openModal, setOpenModal] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Container background={background}>
      <ContainerHeader width={widthHeader}>
        <Media query="(max-width: 500px)">
          {(matches) =>
            matches && (
              <ContainerIcon onClick={() => setOpenMenu(true)}>
                <LinkPersonalized to="/">
                  <img src={HamburgerIcon} alt="icon menu" />
                </LinkPersonalized>
                {openMenu && <ModalMenu close={() => setOpenMenu(!openMenu)} open={openMenu} />}
              </ContainerIcon>
            )
          }
        </Media>

        {/* Options of menu */}
        <ContainerLogo>
          <LinkPersonalized to="/">
            <ImageLogo src={Logo} style={{ padding: '20px' }} alt="logo" />
          </LinkPersonalized>
          {children}
        </ContainerLogo>

        {/* if window until max 1200px the component of button he be render */}
        <Media query="(min-width: 1200px)">
          {(matches) =>
            matches && (
              <ContainerButton>
                <Button
                  width={widthButton}
                  color={colorButton}
                  background={backgroundbutton}
                  content={textButton}
                  onClick={() => setOpenModal(true)}
                  disabled={disabledButton}
                />
                {haveAvatar && <Avatar src={AvatarIcon} />}
              </ContainerButton>
            )
          }
        </Media>
        {openModal && (
          <ModalLogin close={() => setOpenModal(false)} open={openModal} title="Get Started" subTitle="Just Login" />
        )}
      </ContainerHeader>
    </Container>
  )
}
