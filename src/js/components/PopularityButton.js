import React from 'react';
import styled from 'styled-components';


const primaryFontFamily = "league_gothicregular";

const StyledButton = styled.div`
  background-color: ${(props) => props.active ? "#000000" : "#ffffff"};
    color: ${(props) => props.active ? "#ffffff" : "#f30a0a"};
   border-color: "#ffffff";
   font-family: ${primaryFontFamily};
   text-align:center;
   font-size: 1.5em;
box-sizing:border-box;
  
  margin-top: 1em;
  padding: .025em 1.5em;
 cursor:pointer;
  border:10px;
  border-radius: 80px 1px;


   overflow:hidden;


`;

const PopularityButton = ({ onClick, isActive, popularity}) => (

    <div onClick={onClick} >
        <StyledButton active={isActive}> {popularity}</StyledButton>
    </div>


)

export default PopularityButton;