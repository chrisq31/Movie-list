import React from 'react';
import styled from 'styled-components';


const primaryFontFamily = "league_gothicregular";

const StyledButton = styled.div`
  background-color: ${(props) => props.active ? "#000000" : "#000000"};
    color: ${(props) => props.active ? "#ffffff" : "#f30a0a"};
   border-color: "#ffffff";
   font-family: ${primaryFontFamily};
   text-align:center;
   font-size: 1.8em;
   box-sizing:border-box;
  margin-top: 1em;
  padding: .06em 1em;
 cursor:pointer;
  border:10px;
  border-radius: 80px 1px;
  overflow:hidden;


`;

const FilterViewItem = ({ onClick, isActive, genreName, genreId }) => (

    <div onClick={onClick} >
        <StyledButton active={isActive}> {genreName}</StyledButton>
    </div>


)

export default FilterViewItem;