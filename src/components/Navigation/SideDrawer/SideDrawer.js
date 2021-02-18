import React from "react"
import Logo from "../../Logo/Logo"
import NavItems from "../NavItems/NavItems"
import classes from "./SideDrawer.module.css"
import Backdrop from "../../UI/Backdrop/Backdrop"
import Auxi from "../../../hoc/Auxi"

const SideDrawer = (props)=>{
    let attachedClasses = [classes.SideDrawer,classes.Close]
    if(props.show){
        attachedClasses = [classes.SideDrawer,classes.Open]
    }
    return(
        <Auxi>
            <Backdrop show={props.show} clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavItems />
            </nav>
        </div>
        
        </Auxi>
    )
}

export default SideDrawer