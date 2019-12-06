import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { getData} from "../actions/index";
import clapperBoard from '../../img/clapperBoard.svg'


const ItemsContainer = styled.div`
    display:flex;
`;

const LoadingDiv = styled.div`

min-width:300px;
height:inherit;
display:block;

background-image: url(${clapperBoard});
background-repeat: no-repeat;
`


function LoadingView () {
    return (
        <ItemsContainer className ="row">
         <LoadingDiv />
          </ItemsContainer>
    )
}


const mapDispatchToProps = dispatch => {
    return dispatch(getData());
}

export default connect(null,mapDispatchToProps)(LoadingView);

