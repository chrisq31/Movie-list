import React from 'react';
import styled, { keyframes } from 'styled-components'
import clapperBoard from '../../img/clapperBoard.svg'


const primaryFontFamily = "league_gothicregular";
const bgColor = "#40142c";
const textColor = "#ffffff";
const textColorCTA = "#ffffff";

const StyledButton = styled.div`

display:flex;
justify-content: center;
align-items: center;
background-color: ${bgColor};
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
  color: ${textColor};
`;

const TitleCTA = styled(Title)`
  color: ${textColorCTA};
 
`;







const SubmitLogo = styled.div`
display:block;
width:200px;
height:inherit;
font-size: 8vw;
background-image: url(${clapperBoard});
background-repeat: no-repeat;
background-size: contain;
margin-left:30px;
`



const ctaText = "GO!"

const GenresSubmitButton = ({ onClick, isActive, genres }) => (

  <div className="row" onClick={onClick} >

    <StyledButton active={isActive}>
      <Title> {genres}</Title>
      <SubmitLogo>
        <TitleCTA> {ctaText}</TitleCTA>
      </SubmitLogo>
    </StyledButton>

  </div>



)




export default GenresSubmitButton;