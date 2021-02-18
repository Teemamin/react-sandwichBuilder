import React from "react"
import Layout from "./components/Layout/Layout"
import SandwichBuilder from "./containers/SandwichBuilder/SandwichBuilder"
// import ToolBar from "./components/Navigation/ToolBar/ToolBar"

class App extends React.Component{
  state ={
    name : ""

  }

  render(){
    return(
      <div >
        <Layout>
          <SandwichBuilder/>
        </Layout>
      </div>
    )
  }
}

export default App;
