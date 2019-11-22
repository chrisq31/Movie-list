import { connect } from "react-redux";
import ListViewHolder from "./ListViewHolder";
import {getMoviesInGenres} from '../selectors/index'

const mapStateToProps = state => ({
    loadingMovieList: state.siteData.dataLoadingMovieList,
    loadingGenres: state.siteData.dataLoadingGenreList,
     movieList: state.siteData.movieList,
     genresList: state.siteData.genresList.movieList,
 
});

export default connect(mapStateToProps)(ListViewHolder);



