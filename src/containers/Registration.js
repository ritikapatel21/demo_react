import React, { Component } from 'react';
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { checkCookie } from "../helpers/cookie";
import axios from "axios";

import * as sessionActions from "../actions/sessionActions";
import RegistrationForm from '../components/Registration'

class Registration extends Component {

    constructor(props) {
        super(props)

    }
    componentDidMount() {
        document.querySelector('body').classList.add('login_home')
    }

    onSubmit = (values) => {
        const apiBaseUrl = 'http://localhost:4000/api';

        const payload = {
            "firstname": values.firstName,
            "lastname": values.lastName,
            "email": values.email,
            "password": values.password,
        }

        axios.post(apiBaseUrl + '/register', payload)
            .then(function (response) {
                if (response.data.code == 200) {
                    alert("Succesfull Registration");
                    this.props.history.push('/');
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    render() {

        return (
            <div>
                <RegistrationForm onSubmit={this.onSubmit} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Registration));
