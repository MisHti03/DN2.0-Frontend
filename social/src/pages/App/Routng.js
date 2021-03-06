import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
const Routes = () => {
    return(
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
        </Switch>
    </Router>

    )
};

export default Routes;