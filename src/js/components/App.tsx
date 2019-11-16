import React from 'react';
import '../../styles/index.css';
import ListViewContainer from './ListViewContainer';
import FilterViewHolder from './FilterViewHolder';
import LoadingView from './LoadingView'


const App: React.FC = () => {
  return (
    <div className="App">
     <LoadingView />
     <FilterViewHolder />
      <ListViewContainer />
    </div>
  );
}

export default App;
