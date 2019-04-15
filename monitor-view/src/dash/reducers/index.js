import {combineReducers} from 'redux';
import {UPDATE_USER} from "./actions";


// generic reducer for similar store functionality updating
function genericReducer(state = {}, {type, payload}) {
    switch (type) {
        case "update":
            return payload;
        default:
            return state;
    }
}

// update payload depending on input case type
function userReducer(state = {}, {type, payload}) {
    switch (type) {
        case "userLoggedIn":
            return payload;
        case "userLoggedOut":
            return payload;
        case UPDATE_USER:
            return payload;
        default:
            return state;
    }
}

function SelectedFacilityReducer(state = {}, {type, payload}) {
    switch (type) {
        case "updateFacilityList":
            return payload;
        default:
            return state;
    }
}

function DateFrameReducer(state = {}, {type, payload}) {
    let defaultDateframe = {
        From: '',
        To: '',
        CompareFrom: '',
        CompareTo: ''
    };

    switch (type) {
        case "clearDateFrame":
            return defaultDateframe;
        case "updateDateFrame":
            return payload;
        default:
            return state;
    }
}

function FilterReducer(state = {}, {type, payload}) {
    let defaultFilter = {
        conversion: [],
        touch: [],
        rollup: [],
        channel: [],
        source: [],
        campaign: [],
        tier: [],
        medium: [],
        disorder: [],
        network: [],
        targetingMethod: [],
        format: [],
        message: [],
        ageRange: [],
        ethnicity: [],
        familyRole: [],
        gender: [],
        income: [],
        interestsBehaviors: [],
        language: [],
        education: [],
        occupation: [],
        relationship: [],
        religion: []
    };

    switch (type) {
        case "clearFilter":
            return defaultFilter;
        case "updateFilter":
            return payload;
        default:
            return state;
    }
}

// combine and export all reducers
export default combineReducers({
    user: userReducer,
    SelectedFacility: SelectedFacilityReducer,
    SelectedFacilityDomain: genericReducer,
    DateFrame: DateFrameReducer,
    Filter: FilterReducer,
    Touch: genericReducer,
    Conversion: genericReducer,
    Explorer: genericReducer,
    Storyboard: genericReducer,
    Builder: genericReducer,
    Timeframe: genericReducer,
});