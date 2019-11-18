import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import GenresSubmitButton from './GenresSubmitButton';
import{submitGenres}from "../actions/index";




const bgColor="#961086";
const DivContainer = styled.div`
display:flex;
position:fixed;
top:20%;

box-sizing:border-box;

flex-direction:row;
align-items: flex-start; 
align-content: flex-start; 
justify-content: flex-start;
padding:0 2%;


`;

const textColor = "white";
const SubmitButtonHolder = (props) => {

    const onSubmitClick =props.onSubmitClick;
    const genresSelected = props.genresSelected;



     console.log('selected : ',props.genresSelected)

     console.log('str : ', props.genresSelected.forEach(
         function(item,index,array)
         {
             console.log(item,index)
            }
            )
     )


    if (props.loadingMovieList === true || props.loadingGenres === true) {

        return <div>Loading</div>
    }

    if (genresSelected.length > 0) {

      return (
      
            <DivContainer className="row">
    
                 <GenresSubmitButton name ={genresSelected.name} onClick={() => onSubmitClick()}/>
            
            </DivContainer>
        )
         
     }

     return null;

   


   
}
const mapStateToProps = state => ({
    loadingMovieList: state.siteData.dataLoadingMovieList,
    loadingGenres: state.siteData.dataLoadingGenreList,
    genresSelected: state.genresData

});

const mapDispatchToProps = dispatch => ({
    onSubmitClick: id => dispatch(submitGenres())
  })






export default connect(mapStateToProps,mapDispatchToProps)(SubmitButtonHolder);

