import React from 'react';

import {object, func, string, oneOfType, number, array} from 'prop-types';
import styled from 'styled-components';
import {BASE_URL_IMAGE} from '../constants/site-constants'

const bgColor="#bbbbbb";


const primaryFontFamily = "league_gothicregular";



const FilterItem = styled.div`
    width: 300px;
  height: 100%;
   box-sizing: border-box;
   cursor: pointer;
   background-color:${bgColor};
   overflow:hidden;

   margin:20px;
    padding:0;
   
   
`;






const Title = styled.h2`
padding-top:20px;
position:relative;
text-transform: uppercase;
width:100%;
  font-size: 2em;
  text-align: center;
  color: #000000;
  font-family: ${primaryFontFamily};
`;





class  FilterViewItem extends React.Component {

   
    

    render(){
        console.log('title',this.props.item)


         const{
            name,
       

        } = this.props.item
        


    return (

        <div className = "col" >

        <FilterItem>
            <Title>{name}</Title>
        </FilterItem>
        </div>
    );


    }

    
}

export default FilterViewItem;

// ListViewItem.propTypes = {

  
//     title:string,
//     genres:oneOfType([string, array]),
//     poster_path:string

// }
