import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import FilterViewItem from "./FilterViewItem";
import { addGenre } from "../actions/index";
import {getGenreArray} from "../selectors/index";
import { element } from 'prop-types';







const FilterContainer = styled.div`

text-transform: uppercase;
display:flex;
flex-direction: column;
width:30%;

`;

// collection component for each movie showing genre buttons

class FilterViewCollection extends React.Component {


     render() {
    
        const onGenreClick = this.props.onGenreClick;

         return (

              <FilterContainer>

                    {this.props.genres.map((genre,index) => (

                  <FilterViewItem key={index} genreName={genre.name} genreId={genre.id} onClick={() => onGenreClick({genre})} />

                  
                    ))}
                </FilterContainer>
        )

    }
}

const makeMapStateToProps = () => {
    const getGenres = getGenreArray()
    const mapStateToProps = (state, props) => {
      return {
        genres: getGenres(state, props)
      }
    }
    return mapStateToProps
  }
  


const mapDispatchToProps = dispatch => ({
    onGenreClick: genreObj => dispatch(addGenre(genreObj))
})






export default connect(makeMapStateToProps, mapDispatchToProps)(FilterViewCollection);

