import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/AMBERLIS-logos_white.png";
import emoji from '../../assets/emoji.jpeg'
import { firebaseAuth } from "../../utils/firebase-config";
import { FaSearch, FaPowerOff } from "react-icons/fa";
import { BsBell } from 'react-icons/bs'


function Navbar({ isScrolled }) {

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);


  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Series", link: "/series" },
    { name: "New & Popular", link: "/movies" },
	  { name: "Favorites", link: "/mylist" },
	  // { name: "Browser by languages", link: "/languages" },
];



  return (
<Container>
    <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
<div className="left flex a-center">
<div className="brand flex a-center j-center">
   <Link to={("/")}> <img src={Logo} alt="Logo" /></Link>
</div>

    <ul className="links flex">
        {links.map(({ name, link }) => {   
	return (
<li key={name}>
    <Link to={link}>{name}</Link>
</li>
);
})}

</ul>
</div>
<div className="right flex a-center">
<div className={`search ${showSearch ? "show-search" : ""}`}>
<button
    onFocus={() => setShowSearch(true)}
    onBlur={() => {
    if (!inputHover) {
    setShowSearch(false);
}
}}
>
    <FaSearch />
</button>
<input
    type="text"
    placeholder="Search"
    onMouseEnter={() => setInputHover(true)}
    onMouseLeave={() => setInputHover(false)}
    onBlur={() => {
    setShowSearch(false);
    setInputHover(false);
}}
/>
</div>
<div className="rignt flex acenter">
  <BellContainer> 
    <BsBell/>
  </BellContainer>
 
</div>
<div className="right flex a-center">
  <Link to={("/profile")}>
<EmojiContainer>
   <EmojiImage src={emoji} alt="emoji" />
</EmojiContainer>
</Link>
</div>

<Link to={("/signup")}>
<button onClick={() => signOut(firebaseAuth)}>
    <FaPowerOff />
</button>
</Link> 

</div>
</nav>
</Container>
);
}

const BellContainer = styled.div`
cursor: pointer;
`;

const EmojiContainer = styled.div`
  width: 2rem;
  height: 2rem;
  }
`
;

const EmojiImage = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  .scrolled {
    background-color: #1A5D64;
  }
  nav {
    position: sticky;
    top: 0;
    height: 5.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
.left {
    gap: 2rem;
.brand {
img {
    height: 20vh;
    position: relative;
    margin-bottom: 25px;
.Logo {
  position: fixed;
}
}
}

.links {
    list-style-type: none;
    gap: 3rem;
    font-size: small;
li {
a {
    color: #efb810;
    text-decoration: none;
    font-size: 1rem;
}
li, a:hover{
color: #fff;
}
}
}
}
.right {
   gap: 1rem;
   button {
   background-color: transparent;
   border: none;
   cursor: pointer;
   &:focus {
   outline: none;
}
svg {
  color: #efb810;
  font-size: 1.2rem;
}
svg:hover{
  color: #fff;
}
}
.search {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  padding-left: 0.5rem;
button {
  background-color: transparent;
  border: none;
  &:focus {
  outline: none;
}
svg {
  color: #efb810;
  font-size: 1.2rem;
}
}
input {
  width: 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  background-color: transparent;
  border: none;
  color: #ffffff;
  &:focus {
outline: none;
}
}
}
.show-search {
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.6);
input {
   width: 100%;
  opacity: 1;
   visibility: visible;
  padding: 0.3rem;
}
}
}
}
`;

export default Navbar










