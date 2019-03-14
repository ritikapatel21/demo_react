import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { checkCookie } from "../../helpers/cookie";


import * as sessionActions from "../../actions/sessionActions";
import LoginForm from '../../components/Login/LoginForm'


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
class Dashboard extends Component {
    state = { open: false }; 
    onLogout = event => {
        event.preventDefault();
        this.setState({ loading: true });
        this.props.actions.logOutUser(() => {
            this.setState({ loading: false });
            //this.props.history.push("/");
        });
    };   
    render() {
        const { open } = this.state;
        return <div id="wrapper">
            <div style={styles}>
                <h2>Welcome to You !!!</h2>                
                <h2>Login Dashboard</h2>
                <a href="/" onClick={this.onLogout}>Log out</a>
            </div>
        </div>;
    }
};
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
