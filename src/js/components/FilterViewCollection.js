import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import FilterViewItem from "./FilterViewItem";
import { addGenre } from "../actions/index";
import {getGenresArrayFromIdArray} from "../actions/index";
import { element } from 'prop-types';







const FilterContainer = styled.div`
font-family: ${primaryFontFamily};
text-transform: uppercase;
`;

// component for each movie showing genre button

class FilterViewCollection extends React.Component {


     render() {


        const genreIds = this.props.genre_ids;
        const onGenreClick = this.props.onGenreClick;

        const filterCollectionarray =this.props.getGenresArray(genreIds);

       
        return (


                <FilterContainer>

                    {filterCollectionarray.map(element => (
                        <FilterViewItem key={element.id} genreObj={element} onClick={() => onGenreClick({element})} />
                    ))}
                </FilterContainer>

   


        )

    }







}
const mapStateToProps = state => ({
    getGenresArray:getGenresArrayFromIdArray(genreIds)
});

const mapDispatchToProps = dispatch => ({
    onGenreClick: genreObj => dispatch(addGenre(genreObj))
})






export default connect(mapStateToProps, mapDispatchToProps)(FilterViewCollection);

