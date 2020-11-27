import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedInMenu({ signOut }) {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png'></Image>
      <Dropdown pointing='top left' text='Bob'>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Crear Evento'
            icon='plus'
          ></Dropdown.Item>
          <Dropdown.Item text='Mi perfil' icon='user'></Dropdown.Item>
          <Dropdown.Item
            onClick={ signOut }
            text='Cerrar sesion'
            icon='power'
          ></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
