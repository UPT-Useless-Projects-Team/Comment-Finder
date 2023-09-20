import React, { useState } from 'react';
import ButtonPanel from "../buttonsPanel/buttonsPanel";
import "./titlepanel.css";

const TitlePanel = (props) => {
    return(
        <div className='titleBoxContener' id="start">
            <div className="titleBox">
                <div className="titleBoxTopAddon">
                    Projects: {props.projects}
                </div>
                <div className="titleBoxTop">
                    <h1>{props.title}</h1>
                    <div className="btnsBox">
                        <ButtonPanel btnName={"About Us"} id={"aboutus"}/>
                        <ButtonPanel btnName={"Team"} id={"projects"}/>
                        <ButtonPanel btnName={"Contact"}/>
                        <ButtonPanel btnName={"Rules"}/>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default TitlePanel;