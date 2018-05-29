import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FacilityAutoComplete from '../views/facilityAutoComplete';


class Heading extends Component {

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
            </div>
        );
    }
}

export default Heading;
