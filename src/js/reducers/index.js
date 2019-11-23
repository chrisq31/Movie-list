  
import { combineReducers } from 'redux'
import siteData from './siteData';
import genresData from './genresData';
import siteState from './siteState';

export default combineReducers({
    siteData,
    genresData,
    siteState
  })