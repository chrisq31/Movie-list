import React from 'react';

import {object, func, string, oneOfType, number, array} from 'prop-types';
import styled from 'styled-components';
import {BASE_URL_IMAGE} from '../constants/site-constants'
const darkColor="#0099CC";
const bgColor="#000000";


const primaryFontFamily = "league_gothicregular";



const MovieContainer = styled.div`
    width: 300px;
  height: 100%;
   box-sizing: border-box;
   cursor: pointer;
   background-color:${bgColor};
   overflow:hidden;
   display:flex;
 
   flex-direction: column;
   margin:20px;
    padding:0;
   
   
`;

const ImageContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
 
`

const Img = styled.img`
  max-width: 1200px;
    max-height: 1200px;
`;





const Title = styled.h2`
padding-top:20px;
position:relative;
text-transform: uppercase;
width:100%;
  font-size: 3em;
  text-align: center;
  color: ${darkColor};
  font-family: ${primaryFontFamily};
`;





class  ListViewItem extends React.Component {
    

    render(){
         const{
            title,
            genres,
            poster_path


        } = this.props.item
        


    return (

        <div className = "col" >

        <MovieContainer>
            <Title>{title}</Title>
            <div>{genres}</div>
            <ImageContainer>
                <Img src={ BASE_URL_IMAGE+poster_path} alt ={title} />
            </ImageContainer>
        </MovieContainer>
        </div>
    );


    }

    
}

export default ListViewItem;

ListViewItem.propTypes = {

  
    title:string,
    genres:oneOfType([string, array]),
    poster_path:string

}
