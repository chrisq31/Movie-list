import React from 'react';

import { object, func, string, oneOfType, number, array } from 'prop-types';
import styled from 'styled-components';
import { BASE_URL_IMAGE } from '../constants/site-constants'

const bgColor = "#000000";
const bgColorLight = "#ffffff";


const primaryFontFamily = "league_gothicregular";



const Button = styled.button`
    font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  color:${bgColorLight};
  cursor:pointer;
  
  border-radius: 2px;
   background-color:${bgColor};
   overflow:hidden;

   &:hover {
    background: ${bgColorLight};
    color:${bgColor};
  }

  &:active {
    background: ${bgColorLight};
    color:${bgColor};
  }
`;

const isSelected=styled.div`
background: ${bgColorLight};
color:${bgColor};

`






class FilterViewItem extends React.Component {

    state = { active: false }

    onMouseOver = (e) => {
        e.preventDefault();

    }


    onMouseOut = (e) => {
        e.preventDefault();

    }

    onMouseDown = (e) => {
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

                <Button className={(this.state.active ? 'isSelected' : 'isNotSelected')}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                    onMouseDown={this.onMouseDown}
                >
                    {name}
                </Button>
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
