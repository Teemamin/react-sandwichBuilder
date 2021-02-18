import React from "react"
import Auxi from "../../../hoc/Auxi"
import Button from "../../UI/Button/Button"

const OrderSummary = (props)=>{
    let orderIngredients = Object.keys(props.ingredients).map(igKey =>{
        return <li key={igKey+props.ingredients[igKey]}><span style={{textTransform:"capitalize"}}>{igKey}  </span>
           : {props.ingredients[igKey]}</li>
    })
    return(
        <Auxi>
            <h3>Order:</h3>
            <p>Your delicious sandwich summary is:</p>
            <ul>
                {orderIngredients}
            </ul>
            <p>Total Cost: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            <Button btnType="Success" clicked={props.clickedContinue}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.clicked}>CANCEL</Button>
        </Auxi>
    )
}

export default OrderSummary