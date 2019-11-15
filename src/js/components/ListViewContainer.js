import { connect } from "react-redux";
import ListViewHolder from "./ListViewHolder";

const mapStateToProps = state => ({
    loadingMovieList: state.dataLoadingMovieList,
    loadingGenres: state.dataLoadingGenreList,
     movieList: state.movieList,
     genresList: state.genresList
});

export default connect(mapStateToProps)(ListViewHolder);



