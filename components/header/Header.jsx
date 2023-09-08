import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/AMBERLIS-logos_white.png'
import { useNavigate } from 'react-router-dom';


export default function Header(props) {

  const StyledHeader = styled.div`
padding: 0 4rem;
.logo{
   img {
  height: 25vh;
  margin-bottom: 20px;
  
  
}
}

button {
padding: 0.5rem 1rem;
background-color: #efb810;
border: none;
cursor: pointer;
color: #000000;
border-radius: 0.2rem;
font-weight: bolder;
font-size: 1.05rem;
}
  `;

  const navigate = useNavigate();

  return (
    <StyledHeader className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </StyledHeader>
  );
}

