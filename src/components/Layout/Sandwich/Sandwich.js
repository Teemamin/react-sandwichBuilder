import React from "react"
import classes from "./Sandwich.module.css"
import SandwichIngredients from "./SandwichIngredients/SandwichIngredients"

const Sandwich = (props)=>{
    let transformedIngredients = Object.keys(props.ingredients).map((ingredientKey)=>{
        console.log(props.ingredients[ingredientKey])
        return [...Array(props.ingredients[ingredientKey])].map((_,i) =>{
           return <SandwichIngredients key={ingredientKey + i} type={ingredientKey}/>
        })
    })
    console.log(transformedIngredients)

    return(
        <div className={classes.Sandwich}>
            <SandwichIngredients type="bread-top" />
            {transformedIngredients}
            <SandwichIngredients type="bread-bottom" />
        </div>
    )

}

export default Sandwich;