import React from 'react';

import { object, func, string, oneOfType, number, array } from 'prop-types';
import styled from 'styled-components';
import { BASE_URL_IMAGE } from '../constants/site-constants'
const lightColor = "#ffffff";
const bgColor = "#c3204c";


const primaryFontFamily = "league_gothicregular";



const MovieContainer = styled.div`
    width: 60%;
  height: 100%;

  max-wwidth:600px;
   box-sizing: border-box;
   cursor: pointer;
   background-color:${bgColor};
   overflow:hidden;
   display:flex;
   flex-direction:column;
    border:10px;
    border-radius: 0px 0px 84% 0px;
    box-shadow: 10px 3px 66px 90px rgba(15, 16, 25, 0.75);

    
`;

const ImageContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
 
`

const Img = styled.img`
min-width:600px;
//   max-width: 1200px;
//     max-height: 1200px;
`;





const Title = styled.h2`
padding-top:8%;
position:relative;
text-transform: uppercase;
width:100%;
  font-size: 3em;
  text-align: center;
  color: ${lightColor};
  font-family: ${primaryFontFamily};

  
`;





class ListViewItem extends React.Component {




    render() {



        const {
            title,
            genres,
            poster_path


        } = this.props.item



        return (

            <div className="col" >

                <MovieContainer>
                    <Title>{title}</Title>
                    <div>{genres}</div>
                    <ImageContainer>
                        <Img src={BASE_URL_IMAGE + poster_path} alt={title} />
                    </ImageContainer>
                </MovieContainer>
            </div>
        );


    }


}

export default ListViewItem;

// ListViewItem.propTypes = {


//     title:string,
//     genres:oneOfType([string, array]),
//     poster_path:string

// }
