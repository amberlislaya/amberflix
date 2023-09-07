import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, 
  onAuthStateChanged } from 'firebase/auth'
import BackgroundImage from '../../components/backgroundImage/BackgroundImage'
import styled from 'styled-components'
import Header from '../../components/header/Header'
import {firebaseAuth} from '../../utils/firebase-config'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
});

  const handleSignIn = async () => {
try {

const {email, password} = formValues;
await createUserWithEmailAndPassword(firebaseAuth, email, password)
} catch(error) {
  console.log(error)
}
};

onAuthStateChanged(firebaseAuth, (currentUser) => {
  if(currentUser) navigate("/")
});

  return ( 
<Container showPassword = { showPassword }>
<BackgroundImage/>
<div className="content">
  <Header login/>
<div className="body flex column a-center j-center">
<div className="text flex column">
<h1>Disfruta de las mejores peliculas y series</h1>
<h4>En tu Tv, Phone o Tablet</h4>
<h6>Listo para comenzar? Registrate</h6>
</div> 
<div className="form">
  <input 
  type="email" 
  placeholder='Email address'  
  onChange={(e) => 
  setFormValues({
    ...formValues, 
    [e.target.name]: e.target.value, 
})
} 
    name='email' 
  value={formValues.email}
/>

{showPassword && ( 
  <input 
  type="password" 
  placeholder='Password'  
  onChange={(e) => 
  setFormValues({ ...formValues, 
    [e.target.name]: e.target.value, })
}
name='password' 
value={formValues.password}
/>
)}
{!showPassword && (
<button onClick={() => setShowPassword(true)}>Get Started</button>
)}
</div>
{showPassword && <button onClick={handleSignIn}>Log In</button>}
</div> 
</div> 

</Container>
);
}

const Container = styled.div`
position: relative;
  .content {
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.850);
height: 100vh;
width: 100vw;
display: grid;
grid-template-rows: 15vh 85vh;
  .body{
gap: 1rem;
  .text {
gap: 1rem;
text-align: center;
font-size: 2rem;
  h1 {
padding: 0 25rem;
}
}
  .form {
display: grid;
grid-template-columns: ${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
width: 60%;
  input {
color: #000000;
border: none;
padding: 1.5rem;
font-size: 1.2rem; 
border: 1px solid #efb810;
  &:focus {
outline: none;
}
}
  button {
padding: 0.5rem 1rem;
background-color: #efb810;
border: none;
cursor: pointer;
color: #000000;
font-weight: bolder;
font-size: 1.05rem;
}
}
button {
padding: 0.5rem 1rem;
background-color: #efb810;
border: none;
cursor: pointer;
color: #000000;
font-weight: bolder;
font-size: 1.05rem;
border-radius: 0.2rem;
}
}
`;



