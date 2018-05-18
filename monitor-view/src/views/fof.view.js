import React, {Component} from 'react';
import FofTable from '../components/fofTable';
import api from '../components/actions/api';
import FacilityAutoComplete from './facilityAutoComplete';


class FofView extends Component {

    constructor(props) {
        super(props);

        // Check local storage for saved facilities
        let savedFacilities = localStorage.getItem("selectedFacilities") != null ?
            localStorage.getItem("selectedFacilities") : [];

        this.state = {
            fofList: {},
            selectedFacilities: savedFacilities.length > 0 ? savedFacilities.split(',') : [],
        };

        // Initiate request on startup
        this.retrieve();
    }


    retrieve = () => {
        // Request for 404's
        api.fof.get404List().then(resp => {
            console.log(resp);
            this.setState({
                fofList: resp
            });
        });
    };

    // Updates the selected facility list
    selectedUpdate = (val) => {
        this.setState({
            selectedFacilities: val
        });
        console.log(val);
    };

    render() {
        const selected = this.state.selectedFacilities;
        const fof = this.state.fofList;

        if (selected.length > 0) {
            return(
                <div className="fof">
                    <FacilityAutoComplete onUpdate={this.selectedUpdate}/>
                    {fof ? (Object.keys(fof).map((keyName, keyIndex) => {
                        if (selected.includes(fof[keyName].FacilityName)) {
                            // Use keyName to get current key's name, domainObj[keyName] to get value
                            return <FofTable
                                facility={keyName}
                                domain={keyName}
                                key={keyIndex}
                                data={fof[keyName]}
                            />
                        }
                    })) : (<p> Could Not Get Data </p>)
                    }
                </div>
            );
        } else {
            return(
                <div className="fof">
                    <FacilityAutoComplete onUpdate={this.selectedUpdate}/>
                    {fof ? (Object.keys(fof).map((keyName, keyIndex) => {
                            // Use keyName to get current key's name, domainObj[keyName] to get value
                            return <FofTable
                                facility={keyName}
                                domain={keyName}
                                key={keyIndex}
                                data={fof[keyName]}
                            />
                    })) : (<p> Could Not Get Data </p>)
                    }
                </div>
            );
        }
    }
}

export default FofView;