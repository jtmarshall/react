import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import StatusView from './views/status.view';
import FofView from './views/fof.view';
import Nav from './nav/nav-drawer';
import FacilityAutoComplete from './views/facilityAutoComplete';


class App extends Component {

    state = {
        SelectedFacilities: localStorage.getItem("selectedFacilities") != null ?
            localStorage.getItem("selectedFacilities") : [],
    };

    // Updates the selected facility list
    selectedUpdate = (val) => {
        this.setState({
            SelectedFacilities: val
        });
        console.log(val);
    };

    baseUrl = process.env.PUBLIC_URL;

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">
                        <Link to="/">
                            Acadia Monitoring
                        </Link>
                        {' '}
                        <Link to="/404">
                            404
                        </Link>
                    </h1>
                </header>

                <FacilityAutoComplete onUpdate={this.selectedUpdate}/>

                <Switch>
                    <Route exact path='/' render={() => <StatusView selected={this.state.SelectedFacilities}/>}/>
                    <Route path='/404' render={() => <FofView selected={this.state.SelectedFacilities}/>}/>
                </Switch>
            </div>
        );
    }
}

export default App;
