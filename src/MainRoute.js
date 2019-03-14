import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'containers/Login/Login.js';
import Dashboard from 'components/Dashboard/Dashboard';
import UserProfile from 'containers/Account/User';
import Registration from 'containers/Registration';
class MainRoute extends Component {
    render() {      
        
        return <div>
            <Switch>               
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/profile" component={UserProfile} />
                <Route path="/registration" component={Registration} />                
            </Switch>
        </div>;
    }
};
//export default connect(null,null)(MainRoute);
export default MainRoute

