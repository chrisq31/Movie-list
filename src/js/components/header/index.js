import React from 'react';


const lightColor = "#ec1515";

const primaryFontFamily = "league_gothicregular";


const NavHeader = styled.div`
position:fixed;
top:0;

  width: 100%;
  min-height: 30px;
  overflow:hidden;
  display: flex;
  align-items: center;
  background: rgba(33, 0, 14, 0.92); 
  z-index:200;
`;



const Title = styled.h1`
white-space: nowrap;
  font-size: 4.5rem;
  text-align: center;
  color: ${lightColor};
  font-family: ${primaryFontFamily};
  font-weight:bold;
 
   padding-top:30px;
  
`;





export default () => {

return (
        <div className="row">

            Header
     
        </div>


        )
};
