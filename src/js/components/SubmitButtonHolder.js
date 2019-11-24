import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import GenresSubmitButton from './GenresSubmitButton';
import{submitGenres}from "../actions/index";
import {getSelectedGenresByName} from "../selectors"




const bgColor="#961086";
const DivContainer = styled.div`
display:flex;
position:fixed;
top:5%;
right:-10%;

box-sizing:border-box;

flex-direction:row;
align-items: flex-start; 
align-content: flex-start; 
justify-content: flex-start;
padding:0 2%;
z-index:210;

`;

const textColor = "white";
const SubmitButtonHolder = (props) => {

    const onSubmitClick =props.onSubmitClick;
    const getSelectedGenresByName = props.getSelectedGenresByName;

    console.log('selected')



    
    if (props.loadingMovieList === true || props.loadingGenres === true) {

        return <div>Loading</div>
    }

 

    if (getSelectedGenresByName.length > 0) {

   

      return (
      
            <DivContainer className="row">
    
                 <GenresSubmitButton genres ={getSelectedGenresByName} onClick={() => onSubmitClick()}/>
            
            </DivContainer>
        )
         
     }

     return null;

   


   
}
const mapStateToProps = state => ({
    loadingMovieList: state.siteData.dataLoadingMovieList,
    loadingGenres: state.siteData.dataLoadingGenreList,
    getSelectedGenresByName: getSelectedGenresByName(state)

});

const mapDispatchToProps = dispatch => ({
    onSubmitClick: id => dispatch(submitGenres())
  })






export default connect(mapStateToProps,mapDispatchToProps)(SubmitButtonHolder);

