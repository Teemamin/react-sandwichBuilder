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

    continuePurchaseHandler = ()=>{
        alert("you have clicked continue purchase!")
    }

    purchasingHandler =()=>{
        this.setState({purchasing:true})
    }
    cancelPurchaseHandler = ()=>{
        this.setState({purchasing:false})
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
                <Modal show={this.state.purchasing}purchaseCancel={this.cancelPurchaseHandler}> 
                    <OrderSummary ingredients={this.state.ingredients} 
                        totalPrice={this.state.totalPrice}
                        clickedContinue={this.continuePurchaseHandler}
                        clicked={this.cancelPurchaseHandler}/>
                </Modal>
                 <Sandwich ingredients={this.state.ingredients}/>
                  <BuildControls 
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredientHandler={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    canPurchase={this.state.canPurchase}
                    purchasingHandler={this.purchasingHandler}
                    />
            </Auxi>
        )
    }
}

export default SandwichBuilder