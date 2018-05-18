import React, {Component} from 'react';
import api from '../components/actions/api';
import FacilityAutoComplete from './facilityAutoComplete';


class FofView extends Component {

    constructor(props) {
        super(props);

        // Check local storage for saved facilities
        let savedFacilities = localStorage.getItem("selectedFacilities") != null ?
            localStorage.getItem("selectedFacilities") : [];

        this.state = {
            selectedFacilities: savedFacilities.length > 0 ? savedFacilities.split(',') : [],
        }
    }

    // Get 404 list
    retrieve = () => {

    }
}

export default FofView;