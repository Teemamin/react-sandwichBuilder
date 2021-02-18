import React,{Component} from "react"
import Auxi from "../../hoc/Auxi"
import classes from "./Layout.module.css"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
import ToolBar from "../Navigation/ToolBar/ToolBar"

class Layout extends Component{
    state={
        showSideDrawer:false
    }

    closeSideDrawerHandler = ()=>{
        this.setState({showSideDrawer:false})
    }
    toggleSideDrawer = ()=>{
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }
    render(){
        return(
            <Auxi>
                 <ToolBar  toggleSideDrawer={this.toggleSideDrawer}/>
                 <SideDrawer closed={this.closeSideDrawerHandler} show={this.state.showSideDrawer}/>
                <main className={classes.Content}>{this.props.children}</main>
            </Auxi>
            )
    }
}

export default Layout