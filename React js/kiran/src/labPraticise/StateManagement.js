import React, { Component } from 'react';
class StateManagement extends Component {
    constructor(){
     super()
     this.state={
         display:true,
         message:'Welcome Vistor'
     }
    }
    //method
     chanageMessage() {
        this.setState({
            display:!this.state.display,
            //message:'Thank you for subscribing'
            
        })
    }
    removingSubscribe(){
        this.setState({
            message:'you are unSubscribed to this Channel'
        })
    }
    

    render(){
        return(
        <div>
        <h1>{this.state.message}</h1>
        <h1>{this.state.display?"you are unSubscribed to this Channel":"Thank you for subscribing"}</h1>
        <button onClick={()=>this.chanageMessage()} onDoubleClick={()=>this.removingSubscribe()}> Subscribe</button>
        </div>
        )
    }
    
}
export default StateManagement;