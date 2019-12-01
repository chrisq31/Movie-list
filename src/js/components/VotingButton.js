import React from 'react';
import styled from 'styled-components';
import star from '../../img/star.svg'


const primaryFontFamily = "league_gothicregular";

const StyledButton = styled.div`
  
   font-family: ${primaryFontFamily};
   display:inline-block;

   width:100%;
   display:flex;
  
   align-items:center;
    justify-content:center;  
 
  
 
   background-repeat:no-repeat;
   cursor:pointer;
  // background-image: url(${star});
//    background-position: center;
//    background-size:cover;
//    overflow:hidden;

`;

const ImageDiv = styled.div`
  width:150px;
  height:150px;
  position:absolute;

`;

const TextDiv = styled.div`
text-align:center;
color:white;
font-size: 3em;
position:absolute;
`;








const VotingButton = ({ onClick, isActive, voteScore}) => (

    <StyledButton onClick={onClick} >
     <ImageDiv><img src= {star} /></ImageDiv>
      <TextDiv>{voteScore}</TextDiv>
    </StyledButton>


)

export default VotingButton;