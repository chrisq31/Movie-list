import React from 'react';
import styled, { keyframes } from 'styled-components'
import clapperBoard from '../../img/clapperBoard.svg'


const primaryFontFamily = "league_gothicregular";

const StyledButton = styled.div`

display:flex;
justify-content: center;
align-items: center;
  background-color: ${(props) => props.active ? "#000000" : "#40142c"};
    color: ${(props) => props.active ? "#ffffff" : "#ffffff"};
   border-color: "#ffffff";
   text-align:center;
    font-size: 5vw;
  line-height:1em;
  margin: 1em;
  padding: .25em 1.5em;
 cursor:pointer;
  border:10px;
  border-radius: 80px 1px;
  font-family: ${primaryFontFamily};
  text-transform: uppercase;

   overflow:hidden;

   border:10px;
   border-radius: 0px 0px -1% 0px;
   box-shadow: -28px 18px 85px 32px rgba(245,7,7,0.75)

`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const TitleCta = styled(Title)`
  color: tomato;
  border-color: tomato;
`;







const SubmitLogo = styled.div`
display:block;
width:200px;
height:inherit;
font-size: 8vw;
background-image: url(${clapperBoard});
background-repeat: no-repeat;
background-size: contain;
`



const ctaText = "GO!"

const GenresSubmitButton = ({ onClick, isActive, genres }) => (

  <div className="row" onClick={onClick} >
   
    <StyledButton active={isActive}> 
    <Title> {genres}</Title>
   

    <SubmitLogo>

    <TitleCta> {ctaText}</TitleCta>
      
    </SubmitLogo>
    
    </StyledButton>
  
    </div>
   


)




export default GenresSubmitButton;