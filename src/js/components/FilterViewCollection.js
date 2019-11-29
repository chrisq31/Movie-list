import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import FilterViewItem from "./FilterViewItem";
import { addGenre } from "../actions/index";
//import {getGenresArrayFromIdArray} from "../selectors/index";
import { element } from 'prop-types';







const FilterContainer = styled.div`

text-transform: uppercase;
`;

// collection component for each movie showing genre buttons

class FilterViewCollection extends React.Component {


     render() {


       // const genreIds = this.props.genre_ids;
        const genreIds = [28,878];
        const onGenreClick = this.props.onGenreClick;

        //hard-coded for quick test

       const filterCollectionarray= [ { id: 12, "name": "Adventure"}, { id: 14, "name": "Fantasy"},{ id: 10751, "name": "Family"}]

        //const filterCollectionarray =this.props.getGenresArray(genreIds);

       // const filterCollectionarray =getGenresArrayFromIdArray(genreIds);

       
        return (


                <FilterContainer>

                    {filterCollectionarray.map(element => (

                  
                 
                    <FilterViewItem key={element.id} genreName={element.name} genreId={element.id} onClick={() => onGenreClick({element})} />

                  
                    ))}
                </FilterContainer>

   


        )

    }







}
const mapStateToProps = (state,props) => ({
   // getGenresArray:getGenresArrayFromIdArray(state,props)
});

const mapDispatchToProps = dispatch => ({
    onGenreClick: genreObj => dispatch(addGenre(genreObj))
})






export default connect(mapStateToProps, mapDispatchToProps)(FilterViewCollection);

