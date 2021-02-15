import React from "react"
import Auxi from "../../../hoc/Auxi"

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
            <button>CONTINUE</button>
            <button>CANCEL</button>

            <p>Continue to checkout ?</p>
        </Auxi>
    )
}

export default OrderSummary