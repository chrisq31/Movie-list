import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { filterByRating } from "../actions/index";
import FilterViewCollection from "./FilterViewCollection";
import PopularityButton from "./PopularityButton"
import { BASE_URL_IMAGE } from '../constants/site-constants';
const lightColor = "#ffffff";
const bgColor = "#f30a0a";


const primaryFontFamily = "league_gothicregular";



const MovieContainer = styled.div`
    width: 40%;
    height: 650px;
    margin:5% 5%;
    max-width:600px;
    min-width:400px;
    background-image: url(${props => (BASE_URL_IMAGE + props.poster_path)});
    background-repeat:no-repeat;
    background-size:cover;
    background-color:${bgColor};
    overflow:hidden;
    display:flex;
    flex-direction:column;
    border:10px;
    border-radius: 0px 74px 286px 0px;
    box-shadow:10px 3px 33px 35px rgba(15,16,25,0.33);
`;



const FilterViewCollectionHolder=styled.div`

`

const Title = styled.h2`
padding-top:8%;
position:relative;
text-transform: uppercase;
width:100%;
  font-size: 4em;
  text-align: center;
  color: ${lightColor};
  font-family: ${primaryFontFamily};
  background-color: rgba(255, 0, 0, 0.5)


`;





class ListViewItem extends React.Component {

        render() {
        const {
            title,
            genre_ids,
            poster_path,
            vote_average,
            popularity
        
            } = this.props.item

        const onClick = this.props.onClick;

     return (
 
        <MovieContainer poster_path={poster_path}>
                <Title>{title}</Title>

              <Title>{popularity}</Title> 

                <FilterViewCollectionHolder>
               
                    <FilterViewCollection genreIds ={genre_ids} />0
              
                </FilterViewCollectionHolder>

                <PopularityButton popularity = {vote_average} onClick={() => onClick({vote_average})} />
          
            </MovieContainer>

        );


    }


}

const mapDispatchToProps = dispatch => ({
    onClick: voteObj => dispatch(filterByRating(voteObj))
})

export default connect(null,mapDispatchToProps)(ListViewItem);




