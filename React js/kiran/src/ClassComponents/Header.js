import React, {Component} from "react";

function Message(props) {
    return (<h1>Welcome {props.msg }  Components</h1>);
}

class Welcome extends Component{
    render() {
        return <h1>Welcome { this.props.msg } Components</h1>
    }
}

class Greet extends Component{
    render() {
        return ( <> <Message msg="Functional Based"/> <Welcome msg="Class Based" /> </> )
    }
}

export default Welcome;  // This is the deafult Component
export { Greet }; // This is not default Component