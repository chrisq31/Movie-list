import { connect } from "react-redux";
import ListViewHolder from "./ListViewHolder";
import {getSelectedGenresMatchingMovies} from '../selectors/index'

const mapStateToProps = state => ({
    loadingMovieList: state.siteData.dataLoadingMovieList,
    loadingGenres: state.siteData.dataLoadingGenreList,
    siteState:state.siteState,
     movieList: state.siteData.movieList,
     genresList: state.siteData.genresList.movieList,
     selectedMovieInGenre:getSelectedGenresMatchingMovies(state)
 
});

export default connect(mapStateToProps)(ListViewHolder);


