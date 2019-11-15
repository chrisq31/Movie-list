import { GET_MOVIE_DATA, MOVIE_LIST_DATA_LOADED, API_ERRORED_MOVIE_LIST, GET_GENRE_DATA, MOVIE_GENRES_DATA_LOADED, API_ERRORED_GENRE_LIST } from "../constants/action-types";

import { takeEvery, takeLatest, call, put, all } from "redux-saga/effects";

import axios from 'axios';




// the 'watcher' - on every 'DATA_REQUESTED' action, run our side effect
function* watcherGetMovieList() {
    yield takeLatest(GET_MOVIE_DATA, fetchMovieList);
    yield takeLatest(GET_MOVIE_DATA, fetchMovieGenresList);


}
function* fetchMovieList() {



    try {
        const payload = yield call(getMovieListRequest)

        yield put({ type: MOVIE_LIST_DATA_LOADED, payload })

    } catch (error) {
        yield put({ type: API_ERRORED_MOVIE_LIST, error })

    }

}

const getMovieListRequest = () => {

   
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US&page=1";
    return axios.get(url).then(response =>
        response.data
    );
}



function* fetchMovieGenresList() {

    try {
        const payload = yield call(getMovieGenresRequest)

        yield put({ type: MOVIE_GENRES_DATA_LOADED, payload })
    } catch (error) {
        yield put({ type: API_ERRORED_GENRE_LIST, error })

    }

}

const getMovieGenresRequest = () => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US";
    return axios.get(url).then(response =>
        response.data
    );
}



export default function* rootSaga() {
    yield all([
        watcherGetMovieList()

    ])
}
