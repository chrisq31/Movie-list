import React from 'react';
import styled, { keyframes } from 'styled-components'
import clapperBoard from '../../img/clapperBoard.svg'


const primaryFontFamily = "league_gothicregular";
const bgColor = "#f30a0a";
const textColor = "#ffffff";
const textColorCTA = "#f70d0d";

const StyledButton = styled.div`
width:70%;
display:flex;
justify-content: center;
align-items: center;
background-color: ${bgColor};
text-align:center;
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
  font-size:calc(18px + 3vw);
  text-align: center;
  color: ${textColor};
`;

const TitleCTA = styled(Title)`
  color: ${bgColor};
  font-size:calc(24px + 3vw);
  margin-top:60%;
  margin-left:26%;
 
`;







const SubmitLogo = styled.div`
display:flex;
width:200px;
height:inherit;

background-image: url(${clapperBoard});
background-repeat: no-repeat;
background-size: contain;
margin:1.6rem;

`



const ctaText = "CUT!"

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