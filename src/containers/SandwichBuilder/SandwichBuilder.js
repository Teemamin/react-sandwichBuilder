import React,{Component} from "react"
import Auxi from "../../hoc/Auxi"
import Sandwich from "../../components/Layout/Sandwich/Sandwich"
import BuildControls from "../../components/Layout/Sandwich/BuildControls/BuildControls"
// import BuildControls from "../../components/Layout/Sandwich/BuildControls/BuildControl/BuildControl"

const INGREDIENTS_PRICES = {
    salad : 0.10,
    cheese : 1.0,
    bacon : 0.5,
    meat : 1.6
}

class SandwichBuilder extends Component{
    state = {
        ingredients :{
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0

        },
        totalPrice : 5

    }

    addIngredientHandler=(type)=>{
        let oldCount = this.state.ingredients[type]
        let updatedCount = oldCount + 1
        let updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount
        let adon = INGREDIENTS_PRICES[type]
        let oldPrice = this.state.totalPrice
        let newPrice = adon + oldPrice
        this.setState({totalPrice:newPrice,ingredients:updatedIngredient})

    }
    removeIngredientHandler=(type)=>{
        let oldCount = this.state.ingredients[type]
        if(oldCount <= 0){
            return;
        }
        let updatedCount = oldCount - 1
        let updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount
        let adon = INGREDIENTS_PRICES[type]
        let oldPrice = this.state.totalPrice
        let newPrice = adon - oldPrice
        this.setState({totalPrice:newPrice,ingredients:updatedIngredient})

    }


    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
        return(
            <Auxi>
                 <Sandwich ingredients={this.state.ingredients}/>
                <div>
                  <BuildControls 
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredientHandler={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    />
                </div>
            </Auxi>
        )
    }
}

export default SandwichBuilder