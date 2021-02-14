import React from "react"
import Layout from "./components/Layout/Layout"
import SandwichBuilder from "./containers/SandwichBuilder/SandwichBuilder"
// import classes from "./components/Person.module.css"

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
