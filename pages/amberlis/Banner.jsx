import React, {useState} from 'react';
import styled from "styled-components";
import backgroundImage from '../../assets/avatar2.jpg';
import { firebaseAuth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { FaPlay } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar'
import { AiOutlineInfoCircle } from 'react-icons/ai';
import './amber.css'

const Banner = () => {

const navigate = useNavigate();
const [isScrolled, setIsScrolled] = useState(false);


const truncate = (string, n)=> {
return string?.length > n ? string.substr(0, n - 1) + '...' : string;
}

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };



  return (
<Container>
      <Navbar isScrolled={isScrolled} />
<div className='hero'>
<img src={backgroundImage}
    alt="background"
    className="background-image"/>

<div className="container">
<div className="logo">
    <h1 className='bann__name'>AVATAR</h1>
</div>

<div className="buttons flex">
  <button onClick={() => navigate("/player")} className='flex j-center a-center'><FaPlay/>Play</button>
  <button className='flex j-center a-center'><AiOutlineInfoCircle/>More</button>
</div>
<h2 className='bann__descrip'>{truncate(`In a distant future, "Eternal Nexus" follows a brilliant scientist's quest to unlock the secrets of time travel. 
    After discovering a mysterious energy source, she inadvertently rips open a rift in time, endangering the fabric of reality. 
    As chaos ensues, she forms an uneasy alliance with a rogue temporal agent.`, 150)} </h2>
</div>
</div>
</Container>
)
}

const Container = styled.div`
background-color: #efb810;
.hero {
  position: relative;
.background-image {
  filter: brightness(15%);
}
img {
  height: 100vh;
  width: 100vw;
  // object-fit: contain;
}
.container {
  position: absolute;
  bottom: 6rem;
  
.logo {
  img {
    width: 20vw;
    height: 10vw;
    margin-left: 1rem;
  }
}
.buttons {
  margin: 2rem;
  gap: 0.5rem;
  transition: 0.2s ease-in-out;
button {
  font-size: 1.2rem;
  gap: 2rem;
  border-radius: 0.2rem;
  padding: 0.4rem;
  padding-left: 3rem;
  padding-right: 3.4rem;
  border: none;
  cursor: pointer;
  background-color: #efb810;
  transition: all 1.2s ease-in-out;
   &:hover {
  opacity: 0.5;
}
 &:nth-of-type(2) {
  background-color: rgba(109, 109, 110, 0.7);
  color: #000000;
svg {
  font-size: 1.2rem;
  
}
}
}
}
}
}
`;

export default Banner