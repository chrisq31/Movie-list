import React from 'react';
import styled from 'styled-components';



const StyledButton = styled.div`
  background-color: ${(props) => props.active ? "#000000" : "#ffffff"};
    color: ${(props) => props.active ? "#ffffff" : "#f30a0a"};
   border-color: "#ffffff";
   text-align:center;
    font-size: 4vh;
box-sizing:border-box;
  
  margin-top: 1em;
  padding: .025em 1.5em;
 cursor:pointer;
  border:10px;
  border-radius: 80px 1px;


   overflow:hidden;


`;

const FilterViewItem = ({ onClick, isActive, name }) => (

    <div className="col" onClick={onClick} >
        <StyledButton active={isActive}> {name}</StyledButton>
    </div>


)

export default FilterViewItem;