import React from 'react';
import '../../styles/index.css';
import ListViewContainer from './ListViewContainer';
import FilterViewContainer from './FilterViewContainer';
import LoadingView from './LoadingView'


const App: React.FC = () => {
  return (
    <div className="App">
     <LoadingView />
     <FilterViewContainer />
      <ListViewContainer />
    </div>
  );
}

export default App;
