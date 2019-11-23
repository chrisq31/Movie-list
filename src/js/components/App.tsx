import React from 'react';
import '../../styles/index.css';
import SiteHeaderView from './SiteHeaderView';
import SiteFooterView from './SiteFooterView';
import ListViewContainer from './ListViewContainer';
import FilterViewHolder from './FilterViewHolder';
import SubmitButtonHolder from './SubmitButtonHolder';
import LoadingView from './LoadingView';



const App: React.FC = () => {
  return (
    <div className="App">
     <LoadingView />
     <FilterViewHolder />
      <ListViewContainer />
      <SiteHeaderView />
      <SiteFooterView />
      <SubmitButtonHolder />
    </div>
  );
}

export default App;
