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
background-color:${bgColor};
`;

const textColor = "white";
const SubmitButtonHolder = (props) => {

    const onSubmitClick =props.onSubmitClick;

    if (props.loadingMovieList === true || props.loadingGenres === true) {

        return <div>Loading</div>
    }
    return (
        <DivContainer className="row">
        
                <GenresSubmitButton  onClick={() => onSubmitClick()}/>
        
        </DivContainer>
    )
}
const mapStateToProps = state => ({
    loadingMovieList: state.siteData.dataLoadingMovieList,
    loadingGenres: state.siteData.dataLoadingGenreList,
    genresList: state.siteData.genresList
});

const mapDispatchToProps = dispatch => ({
    onSubmitClick: id => dispatch(submitGenres())
  })






export default connect(mapStateToProps,mapDispatchToProps)(SubmitButtonHolder);

