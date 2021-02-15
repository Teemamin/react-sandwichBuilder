import React from "react";
import classes from "./SandwichIngredients.module.css"
import PropTypes from 'prop-types';

const SandwichIngredients = (props)=>{
    let ingredient = null
    switch(props.type){
    
        case("bread-top"):
            ingredient =  <div className={classes.BreadTop}></div>
        break;
        case("bread-bottom"):
            ingredient =
                <div className={classes.BreadBottom}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds1}></div>
                </div>
        break;
        case("meat"):
        ingredient =
            <div className={classes.Meat}></div>
        break;
        case("cheese"):
            ingredient = 
                <div className={classes.Cheese}></div>
        break;
        case("salad"):
            ingredient =
                <div className={classes.Salad}></div>
        break;
        case("bacon"):
            ingredient = 
                <div className={classes.Bacon}></div>
        break;
        default: 
            ingredient = null;

    }
    return ingredient

}


SandwichIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default SandwichIngredients