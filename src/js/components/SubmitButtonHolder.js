import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import GenresSubmitButton from './GenresSubmitButton';
import{switchState}from "../actions/index";
import {getSelectedGenresByName} from "../selectors"





const DivContainer = styled.div`

position:fixed;
display:block;
top:5%;
right:0;
box-sizing:border-box;
padding:0 0;
z-index:210;

`;


const SubmitButtonHolder = (props) => {

    const onSubmitClick =props.onSubmitClick;
    const getSelectedGenresByName = props.getSelectedGenresByName;

    if (props.loadingMovieList === true || props.loadingGenres === true) {

        return <div>Loading</div>
    }

 

    if (getSelectedGenresByName.length > 0) {

   

      return (
      
            <DivContainer className="row">
    
                 <GenresSubmitButton text ={getSelectedGenresByName} onClick={() => onSubmitClick()}/>
            
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
    onSubmitClick: id => dispatch(switchState())
  })






export default connect(mapStateToProps,mapDispatchToProps)(SubmitButtonHolder);

