import '../styles/Main.css';
import Home from './Home.js'
import Menu from './Header.js'
import UsersList from './UsersList.js'
import { Switch, Route, HashRouter } from 'react-router-dom';

function Main() {
    return (
        <div className="App">
            <Menu />
            <HashRouter>
                <Switch>
                    <Route
                        exact
                        path="/home"
                        render={(props) =>
                            <Home />
                        }
                    />
                    <Route
                        exact
                        path="/userslist"
                        render={(props) =>
                            <UsersList />
                        }
                    />
                </Switch>
            </HashRouter>
        </div>
    );
}

export default Main;
