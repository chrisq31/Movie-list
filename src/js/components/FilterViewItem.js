import React from 'react';

import { object, func, string, oneOfType, number, array } from 'prop-types';
import styled from 'styled-components';
import { BASE_URL_IMAGE } from '../constants/site-constants'

const bgColor = "#000000";
const bgColorLight = "#ffffff";


const primaryFontFamily = "league_gothicregular";




const StyledButton = styled.div`
  background-color: ${(props) => props.active ? "#000000" : "#ffffff"};
    color: ${(props) => props.active ? "#ffffff" : "#000000"};
   border-color: "#ffffff";
   text-align:center;


  font-size: 1.8em;
  line-height:1em;
  margin: 1em;
  padding: .25em 1.5em;
 cursor:pointer;
  border:10px;
  border-radius: 80px 1px;
  font-family: ${primaryFontFamily};
  text-transform: uppercase;

   overflow:hidden;


`;

class FilterViewItem extends React.Component {

    state = { active: false }

    
    handleClick = (e) => {
        e.preventDefault();
        this.setState({ active: !this.state.active })
        console.log('down', this.state.active)


    }


    render() {
        const {
            name,
        } = this.props.item

        return (

            <div className="col" >

                <StyledButton onClick={this.handleClick} active={this.state.active}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}

                >
                    {name}
                </StyledButton>
            </div>
        );


    }


}

export default FilterViewItem;

// ListViewItem.propTypes = {


//     title:string,
//     genres:oneOfType([string, array]),
//     poster_path:string

// }
