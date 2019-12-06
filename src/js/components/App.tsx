import React from 'react';
import '../../styles/index.css';
import SiteHeaderView from './SiteHeaderView';
import SiteFooterView from './SiteFooterView';
import ViewContainer from './ViewContainer';
import LoadingView from './LoadingView';



const App: React.FC = () => {
  return (
    <div className="App">
     <LoadingView />
      <ViewContainer />
      <SiteHeaderView />
      <SiteFooterView />
    </div>
  );
}

export default App;
