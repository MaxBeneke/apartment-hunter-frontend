import React from "react";
import {Icon, Menu, Sidebar, Checkbox} from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const UserInfo = ({ user, handleLogout, visible, setVisible, handleUpdateForm, ludicrous, setLudicrous, lightMode, setLightMode}) => {
  let history = useHistory();

  const sendToFavorites = () => {
    console.log("clicked");
    history.push("/favorites");
  };

  return (
    <>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon='labeled'
        inverted
        visible={visible}
        vertical
        width={'thin'}
        onClick={()=>setVisible(!visible)}
      >
        <Menu.Item onClick={handleLogout} as="a">
          <Icon name="log out" />
          {!user.name || user.name === "Guest" ? "Sign In" : "Log Out"}
        </Menu.Item>
        <Menu.Item onClick={sendToFavorites} as="a">
          <Icon name="star" />
          Favorites
        </Menu.Item>
        <Menu.Item onClick={handleUpdateForm} as="a">
          <Icon name="user circle" />
          Update User Info
        </Menu.Item>
        <Menu.Item>
          <Checkbox toggle onChange={()=>setLightMode(!lightMode)} />
          <div>{lightMode ? 'Dark Mode' : 'Light Mode'}</div>
        </Menu.Item>
      </Sidebar>
    </>
  );
};

export default UserInfo;
