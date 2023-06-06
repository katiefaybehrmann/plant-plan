import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import { UserContext } from "./Context";

function NavBar() {
  const {user, setUser} = useContext(UserContext)
  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/">{user.username}'s PlantPlan</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/plants">
          View My Garden
        </Button>
        <Button as={Link} to="/plants/dates">
          My Planting Timeline
        </Button>
        <Button as={Link} to="/classifications">
          View Plant Classifications
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Gill Sans";
  font-size: 3rem;
  color: darkgreen;
  margin: 10px;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: relative;
  right: 8px;
`;

export default NavBar;
