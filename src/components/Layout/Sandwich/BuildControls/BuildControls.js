import React from "react"
import classes from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl"

const buildControls = (props)=>{
    const controls = [
        {label:"Salad",type:"salad"},
        {label:"Bacon",type:"bacon"},
        {label:"Cheese",type:"cheese"},
        {label:"Meat",type:"meat"}
    ]
    return(
        <div className={classes.BuildControls}>
            {controls.map(ctrl=>(<BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            addIngredientHandler={()=>props.addIngredientHandler(ctrl.type)}
            removeIngredientHandler={()=>props.removeIngredientHandler(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />))}
        </div>
    )
}

export default buildControls