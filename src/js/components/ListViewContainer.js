import { connect } from "react-redux";
import ListViewHolder from "./ListViewHolder";

const mapStateToProps = state => ({
    loadingMovieList: state.siteData.dataLoadingMovieList,
    loadingGenres: state.siteData.dataLoadingGenreList,
     movieList: state.siteData.movieList,
     genresList: state.siteData.genresList
});

export default connect(mapStateToProps)(ListViewHolder);



