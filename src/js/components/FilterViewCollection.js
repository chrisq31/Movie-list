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

console.log('this props',this.props)
       // const genreIds = this.props.genre_ids;
        const genreIds = [28,878];
        const onGenreClick = this.props.onGenreClick;

        //hard-coded for quick test

       const filterCollectionarray= [ { id: 12, "name": "Adventure Fantasy"}, { id: 14, "name": "Fantasy"},{ id: 10751, "name": "Family"},{ id: 14, "name": "Fantasy"}]

        //const filterCollectionarray =this.props.getGenresArray(genreIds);

       // const filterCollectionarray =getGenresArrayFromIdArray(genreIds);

       
        return (


                <FilterContainer>

                    {filterCollectionarray.map((element,index) => (

                  
                 
                    <FilterViewItem key={index} genreName={element.name} genreId={element.id} onClick={() => onGenreClick({element})} />

                  
                    ))}
                </FilterContainer>

   


        )

    }







}
const mapStateToProps = (state,props) => ({
    getGenresArray:getGenreArray(state,props)
});

const mapDispatchToProps = dispatch => ({
    onGenreClick: genreObj => dispatch(addGenre(genreObj))
})






export default connect(mapStateToProps, mapDispatchToProps)(FilterViewCollection);

