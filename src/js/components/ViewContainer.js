import React from 'react';
import styled from 'styled-components';

import ListViewHolder from './ListViewHolder';
import FilterViewHolder from './FilterViewHolder';

const ViewContainerHolder = styled.div`
display:flex;
flex-flow: row wrap;
padding-top:100px;
padding-bottom:100px;

justify-content: center;
`;


const Flexcolumn = styled.div`
  text-align: center;
 
  width: ${(props) => props.size / 12 * 100}vw;
`



const ViewContainer = () => (

    <div className="row" >

        <ViewContainerHolder>

        <Flexcolumn size={9}>
        <ListViewHolder />
        </Flexcolumn>

        <Flexcolumn size={3}>
        <FilterViewHolder />
        </Flexcolumn>

        </ViewContainerHolder>
    </div>


)

export default ViewContainer;