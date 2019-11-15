import React from 'react';
import '../../styles/index.css';
import ListViewContainer from './ListViewContainer';
import LoadingView from './LoadingView'


const App: React.FC = () => {
  return (
    <div className="App">
     <LoadingView />
      <ListViewContainer />
    </div>
  );
}

export default App;
