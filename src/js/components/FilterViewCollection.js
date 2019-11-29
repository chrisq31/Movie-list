import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import FilterViewItem from "./FilterViewItem";
import { addGenre } from "../actions/index";
import {getGenresArrayFromIdArray} from "../selectors/index";
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

        //const filterCollectionarray =this.props.getGenresArray(genreIds);

        const filterCollectionarray =getGenresArrayFromIdArray(genreIds);

       
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
   // getGenresArray:getGenresArrayFromIdArray(genreIds)
});

const mapDispatchToProps = dispatch => ({
    onGenreClick: genreObj => dispatch(addGenre(genreObj))
})






export default connect(mapStateToProps, mapDispatchToProps)(FilterViewCollection);

