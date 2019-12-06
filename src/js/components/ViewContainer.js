import React from 'react';
import styled from 'styled-components';
import ListViewHolder from './ListViewHolder';
import popcorn from '../../img/popcorn.svg'

const ViewContainerHolder = styled.div`
display:flex;
flex-flow: row wrap;
padding-top:100px;
padding-bottom:100px;

justify-content: center;

background-image: url(${popcorn});
background-repeat: repeat-y;
background-size:contain;



`;


const Flexcolumn = styled.div`
  text-align: center;
 
  width: ${(props) => props.size / 12 * 100}vw;
`



const ViewContainer = () => (

    <div className="row" >

        <ViewContainerHolder>
        <Flexcolumn size={12}>
        <ListViewHolder />
        </Flexcolumn>
      </ViewContainerHolder>
    </div>


)

export default ViewContainer;