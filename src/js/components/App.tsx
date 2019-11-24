import React from 'react';
import '../../styles/index.css';
import SiteHeaderView from './SiteHeaderView';
import SiteFooterView from './SiteFooterView';
import ListViewHolder from './ListViewHolder';
import FilterViewHolder from './FilterViewHolder';
import SubmitButtonHolder from './SubmitButtonHolder';
import LoadingView from './LoadingView';



const App: React.FC = () => {
  return (
    <div className="App">
     <LoadingView />
     <FilterViewHolder />
      <ListViewHolder />
      <SiteHeaderView />
      <SiteFooterView />
      <SubmitButtonHolder />
    </div>
  );
}

export default App;
