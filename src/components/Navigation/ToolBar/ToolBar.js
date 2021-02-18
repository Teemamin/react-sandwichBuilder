import React from "react"
import classes from "./ToolBar.module.css"
import Logo from "../../Logo/Logo"
import NavItems from "../NavItems/NavItems"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

const ToolBar = (props)=>{
    return(
        <header className={classes.ToolBar}>
           <DrawerToggle toggleSideDrawer = {props.toggleSideDrawer}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavItems />
            </nav>
        </header>
    )
}

export default ToolBar