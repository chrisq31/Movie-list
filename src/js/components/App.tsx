import React from 'react';
import '../../styles/index.css';
import ListViewContainer from './ListViewContainer';
import FilterViewHolder from './FilterViewHolder';
import SubmitButtonHolder from './SubmitButtonHolder';
import LoadingView from './LoadingView';



const App: React.FC = () => {
  return (
    <div className="App">
     <LoadingView />
     <SubmitButtonHolder />
     <FilterViewHolder />
      <ListViewContainer />
    </div>
  );
}

export default App;
