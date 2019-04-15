import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './global.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import moment from 'moment';


const defaultState = {
    SelectedFacility: [],
    SelectedFacilityDomain: '',
    DateFrame: {
        From: moment().add(-7, 'days').format('YYYY-MM-DD'),
        To: moment().format('YYYY-MM-DD'),
        CompareFrom: '',
        CompareTo: ''
    },
    Filter: {
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
    },
    Touch: {
        tabValue: 0
    },
    Conversion: {
        tabValue: 0
    },
    Explorer: {
        tabValue: 0
    },
    Storyboard: {
        tabValue: 0,
        searchMetric: 'ip',
        storyPivot: 'session'
    },
    Builder: {
        Columns: [],
    },
    Timeframe: {
        tabValue: 0
    },
};

// declare store using all combined reducers and a pre-loaded(default) state;
const store = createStore(
    reducers,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

// // redux test user action
// const updateUserAction = {
//     type: 'updateUser',
//     payload: {
//         user: 'john'
//     }
// };
//
// store.dispatch(updateUserAction);

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();