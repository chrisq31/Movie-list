import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import BackButton from './BackButton';
import { switchState } from "../actions/index";
import { getSelectedGenresByName } from "../selectors"

const lightColor = "#ec1515";

const primaryFontFamily = "league_gothicregular";


const NavHeader = styled.div`
position:fixed;
top:0;

  width: 100%;
  min-height: 30px;
  overflow:hidden;
  display: flex;
  align-items: center;
  background: rgba(33, 14, 14, 0.96); 
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





const SiteHeaderView = (props) => {


    const onSubmitClick = props.onSubmitClick;
    const getSelectedGenresByName = props.getSelectedGenresByName;

    if (props.loadingMovieList === true || props.loadingGenres === true) {

        return <div>Loading</div>
    }



    if (getSelectedGenresByName.length > -1) {



        return (

            <div className="row">
                <NavHeader>

                    <div className="col-8">

                        <Title>POP MY CORN...PUNK</Title>

                    </div>

                    <div className="col-4">

                        <BackButton text={getSelectedGenresByName} onClick={() => onSubmitClick()} />

                    </div>

                </NavHeader>
            </div>


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






export default connect(mapStateToProps, mapDispatchToProps)(SiteHeaderView);


