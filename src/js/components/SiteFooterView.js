import React from 'react';
import styled from 'styled-components';
const lightColor = "#ffffff";

const primaryFontFamily = "league_gothicregular";


const NavFooter = styled.div`
position:fixed;
bottom:0;

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
  font-size: 1.5rem;
  text-align: center;
  color: ${lightColor};
  font-family: ${primaryFontFamily};
  font-weight:bold;
 
   padding-top:10px;
  
`;


const SiteFooterView = () => {



    return (

        <div className="row">
            <NavFooter>


                <div className="col-8">

                    <Title>A CHRIS QUINN PRODUCTION    quinn.uk@gmail.com</Title>

                </div>

            </NavFooter>
        </div>


    )


}


export default SiteFooterView;
