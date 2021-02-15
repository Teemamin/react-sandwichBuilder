import React,{Component} from "react"
import Auxi from "../../hoc/Auxi"
import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary"

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
        totalPrice : 5,
        canPurchase : false,
        purchasing : false,

    }

    purchasingHandler =()=>{
        this.setState({purchasing:true})
    }

    canPurchaseHandler = (ingredients)=>{
        let sum = Object.keys(ingredients).map(
            igKeg =>{
                return ingredients[igKeg]
            }
        ).reduce((sum,el)=>{
            return sum + el
        },0)
        this.setState({canPurchase:sum > 0})
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
        this.canPurchaseHandler(updatedIngredient)

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
        this.canPurchaseHandler(updatedIngredient)

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
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                 <Sandwich ingredients={this.state.ingredients}/>
                <div>
                  <BuildControls 
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredientHandler={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    canPurchase={this.state.canPurchase}
                    purchasingHandler={this.purchasingHandler}
                    />
                </div>
            </Auxi>
        )
    }
}

export default SandwichBuilder