import React,{Component} from "react"
import Auxi from "../../hoc/Auxi"
import Sandwich from "../../components/Layout/Sandwich/Sandwich"

class SandwichBuilder extends Component{
    state = {
        ingredients :{
            salad : 1,
            bacon : 2,
            cheese : 1,
            meat : 2

        }

    }
    render(){
        return(
            <Auxi>
                 <Sandwich ingredients={this.state.ingredients}/>
                <div>
                   Build control
                </div>
            </Auxi>
        )
    }
}

export default SandwichBuilder