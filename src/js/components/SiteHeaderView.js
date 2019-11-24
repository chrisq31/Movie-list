import React from 'react';
import styled from 'styled-components';

const lightColor = "#ffffff";

const primaryFontFamily = "league_gothicregular";


const NavHeader = styled.div`
position:fixed;
top:0;

  width: 100%;
  min-height: 30px;
  overflow:hidden;
  display: flex;
  align-items: center;
  background: rgba(243, 10, 10, 0.96); 
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


const SiteHeaderView = () => {



    return (

        <div className="row">
            <NavHeader>

                <div className="col-8">

                    <Title>POP MY CORN...PUNK</Title>

                 </div>

            </NavHeader>
        </div>


    )


}


export default SiteHeaderView;
