import { connect } from "react-redux";
import FilterViewHolder from "./FilterViewHolder";

const mapStateToProps = state => ({
    loadingMovieList: state.dataLoadingMovieList,
    loadingGenres: state.dataLoadingGenreList,
    genresList: state.genresList
});

export default connect(mapStateToProps)(FilterViewHolder);



