import React from 'react';
import styled from 'styled-components';


const primaryFontFamily = "league_gothicregular";
const StyledButton = styled.div`
  background-color: ${(props) => props.active ? "#000000" : "#40142c"};
    color: ${(props) => props.active ? "#ffffff" : "#ffffff"};
   border-color: "#ffffff";
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

const GenresSubmitButton = ({ onClick, isActive, name }) => (

          <div className="col" onClick={onClick} >
              <StyledButton active={isActive}> {name}</StyledButton>
          </div>
      
      
      )




export default GenresSubmitButton;