import React from 'react';
import styled from 'styled-components';
import star from '../../img/star.svg'


const primaryFontFamily = "league_gothicregular";

const StyledButton = styled.div`
  
   font-family: ${primaryFontFamily};
   color:white;
   text-align:center;
   font-size: 4.5em;
   padding: 8%;
   background-repeat:no-repeat;
   cursor:pointer;
   background-image: url(${star});
   background-position: center;
   background-size:contain;
   overflow:hidden;
`;



const VotingButton = ({ onClick, isActive, voteScore}) => (

    <div onClick={onClick} >
        <StyledButton active={isActive}> {voteScore}</StyledButton>
    </div>


)

export default VotingButton;