import React from 'react';
import {StoreProvider} from "store";
import reducers from  "reducers";
import initialState from "store/initialState";

import Header from "components/header";
import MovieList from "components/movielist";






export default () => (
  <StoreProvider initialState={initialState} reducer={reducers}>
    <Header />
    <MovieList />
   </StoreProvider>

);





