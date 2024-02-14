import React from "react";
import '../icon/icon.scss';



class Icon extends React.Component
{
    constructor(props){
        
        super(props);
    }
    
    render(){

        let imgsrc=this.props.svsc;
        return(
            <div className="icon">
                <img src={imgsrc} alt="icons"/>
            </div>
        );
    }

}

export default Icon;