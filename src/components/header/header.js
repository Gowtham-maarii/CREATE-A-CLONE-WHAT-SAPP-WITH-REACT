import React from "react";
import searchIcon from '../../img/search.svg';
import cameraIcon from '../../img/camera.svg';
import menuIcon from '../../img/menudots.svg';

import './header.scss';
import Icon from '../icon/icon';


class Header extends React.Component
{
    constructor (props)
    {
        super(props);
    }
    render()
    {

        return(
            <div className="header">
                <div className="title">
                    {this.props.title}
                </div>
                <div className="action-icons">
                    <div className="icon">
                       <Icon svsc={cameraIcon}/>
                       <Icon svsc={searchIcon}/>
                       <Icon svsc={menuIcon}/>
                    </div>
                </div>
    
            </div>
    
        );
    }
}
export default Header;