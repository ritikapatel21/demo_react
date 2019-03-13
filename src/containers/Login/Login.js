import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { checkCookie } from "../../helpers/cookie";


import * as sessionActions from "../../actions/sessionActions";
import LoginForm from '../../components/Login/LoginForm'

class Login extends Component {
    
    componentDidMount(){
        document.querySelector('body').classList.add('login_home')
    }
     
    onSubmit = (values) => {        
        this.props.actions.loginUser(values, () => {
            this.props.history.push('/')
        })
    }

    render() {  
        const session = this.props.session      
        if(checkCookie('jwt')){
            this.props.history.push('/dashboard')
        }
        return (
            <div>
                <LoginForm onSubmit={this.onSubmit} sessiondata={session}/>
            </div>
        )
    }
}

function mapStateToProps({ session }) {
    return {
        session
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);