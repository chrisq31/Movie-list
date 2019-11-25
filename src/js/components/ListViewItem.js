import React from 'react';
import styled from 'styled-components';
import { BASE_URL_IMAGE } from '../constants/site-constants'
const lightColor = "#ffffff";
const bgColor = "#f30a0a";


const primaryFontFamily = "league_gothicregular";



const MovieContainer = styled.div`
    width: 40%;
    height: auto;
    margin-top:20%;
    max-width:400px;
    min-width:400px;

    max-height:650px;
    margin-right:50px;
  
    background-color:${bgColor};
    overflow:hidden;
    display:flex;
    flex-direction:column;
    border:10px;
    border-radius: 0px 74px 286px 0px;
    box-shadow:10px 3px 33px 35px rgba(15,16,25,0.33);


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

       

                <MovieContainer>
                    <Title>{title}</Title>
                    <div>{genres}</div>
                    <ImageContainer>
                        <Img src={BASE_URL_IMAGE + poster_path} alt={title} />
                    </ImageContainer>
                </MovieContainer>
           
        );


    }


}

export default ListViewItem;


