import React from "react";
import sanwichLogo from "../../assets/images/sandwichLogo.png"
import classes from "./Logo.module.css"

const Logo = ()=>{
    return (
        <div className={classes.Logo}>
            <img src={sanwichLogo} alt="delishSandwich"/>
        </div>
    )
}

export default Logo