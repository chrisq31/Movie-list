import React from 'react';
import styled from 'styled-components';
import star from '../../img/star.svg'


const primaryFontFamily = "league_gothicregular";

const StyledButton = styled.div`
  
   font-family: ${primaryFontFamily};
   color:white;
   text-align:center;
   font-size: 2em;
   padding: 8%;


`;



const PopularIndexView = ({ popular }) => (
 <StyledButton> {popular}</StyledButton>
)

export default PopularIndexView;