import React from 'react';
import styled from 'styled-components';


const primaryFontFamily = "league_gothicregular";




const StyledButton = styled.div`
  background-color: ${(props) => props.active ? "#000000" : "#ffffff"};
    color: ${(props) => props.active ? "#ffffff" : "#000000"};
   border-color: "#ffffff";
   text-align:center;
    font-size: 1.8em;
  line-height:1em;
  margin: 1em;
  padding: .25em 1.5em;
 cursor:pointer;
  border:10px;
  border-radius: 80px 1px;
  font-family: ${primaryFontFamily};
  text-transform: uppercase;

   overflow:hidden;


`;

const FilterViewItem = ({ onClick, isActive, name }) => (
    
    <div className="col" onClick={onClick} >
        <StyledButton active={isActive}> {name}</StyledButton>
    </div>


)

export default FilterViewItem;