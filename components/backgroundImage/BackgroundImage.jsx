import React from 'react'
import backgroundImage from '../../assets/avatar2.jpg'
import styled from 'styled-components'


function BackgroundImage () {

  const Container = styled.div`
height: 100vh;
width: 100vw;



img{
 height: 100vh;
 width: 100vw;

}
`;

  return (

<Container>
<img src={backgroundImage} alt="background" />
</Container>

)
}

export default BackgroundImage