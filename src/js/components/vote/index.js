import React from 'react';
import styled from 'styled-components';
import star from '../../img/star.svg'


const primaryFontFamily = "league_gothicregular";

const StyledButton = styled.div`
   padding:0;
   margin:0;
  
   font-family: ${primaryFontFamily};
   display:inline-block;
   width:100%;
   display:flex;
   align-items:center;
   justify-content:center;  
   cursor:pointer;
`;

const ImageDiv = styled.div`
  width:150px;
  height:150px;
  position:absolute;
  transform: scale(0.66);

`;

const TextDiv = styled.div`
text-align:center;
color:black;
font-size: 2em;
position:absolute;

`;



export default ({ onClick, isActive, voteScore}) => (

    <StyledButton onClick={onClick} >
     <ImageDiv><img src= {star} alt="star background" /></ImageDiv>
      <TextDiv>{voteScore}</TextDiv>
    </StyledButton>

)
