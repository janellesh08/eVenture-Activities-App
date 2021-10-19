import { Component } from "react";
import { connect } from "react-redux";


export default function(ComposedComponent) {
    class Authenticate extends Component {
        constructor(props){
            super(props)

            if(!this.props.isAuthenticated){
                this.props.history.push('/Login')
            }
        }

        render(){
            return <ComposedComponent {...this.props} /> 
        }
    }

    const mapStateToprops = (state) => {
        return{
            isAuthenticated: state.authRed.isAuthenticated
        }
    }

    return connect(mapStateToprops)(Authenticate)
}