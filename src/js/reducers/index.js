  
import { combineReducers } from 'redux'
import siteData from './siteData';
import genresData from './genresData';
import siteStateData from './siteStateData';


export default combineReducers({
    siteData,
    genresData,
    siteStateData
  
  })