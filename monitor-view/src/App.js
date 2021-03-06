import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import StatusView from './views/status.view';
import ManualCrawl from './views/manualCrawl.view';
import FacilityAutoComplete from './views/facilityAutoComplete';
import './assets/css/material-dashboard.css';
import './index.css';



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
        if (window.location.hash === "#/manual_crawl") {
            return (
                <div className="App">
                    <header className="App-header">
                        <div className="App-title">
                            <Link to="/">
                                Acadia Monitoring
                            </Link>
                        </div>
                    </header>
                    <Route path='/manual_crawl' render={() => <ManualCrawl/>}/>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <div className="App-title">
                            <Link to="/">
                                Acadia Monitoring
                            </Link>
                        </div>
                    </header>
                    <FacilityAutoComplete onUpdate={this.selectedUpdate}/>

                    <Route exact path='/' render={() => <StatusView selected={this.state.SelectedFacilities}/>}/>

                    {(window.location.hash !== "#/") ? (
                        <div style={{padding: "30px"}}>
                            You're off the path...
                            <Link to="/">
                                Go Back Home
                            </Link>
                        </div>
                    ) : <span></span>
                    }
                </div>
            );
        }
    }
}

export default App;
