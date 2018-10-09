import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import StatusView from './views/status.view';
import FofView from './views/fof.view';
import ManualCrawl from './views/manualCrawl.view';
// import Nav from './nav/nav-drawer';
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
        // remove unnecessary search bar from manual crawl page
        if (window.location.hash == "#/manual_crawl") {
            return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">
                            <Link to="/">
                                Acadia Monitoring
                            </Link>
                        </h1>
                    </header>
                    <Route path='/manual_crawl' render={() => <ManualCrawl/>}/>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">
                            <Link to="/">
                                Acadia Monitoring
                            </Link>
                        </h1>
                    </header>
                    <FacilityAutoComplete onUpdate={this.selectedUpdate}/>
                    
                    <Route exact path='/' render={() => <StatusView selected={this.state.SelectedFacilities}/>}/>
                </div>
            );
        }
    }
}

export default App;
