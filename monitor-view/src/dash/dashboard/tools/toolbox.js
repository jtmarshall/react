// Collection of global Dash funcs
import moment from "moment";

export default {
    storePak: (input) => {
        // Convert JSON input to string
        let stringYakPak = JSON.stringify(input);

        // Save it to local storage
        window.localStorage.setItem('yakPak', stringYakPak);
    },
    retrievePak: () => {
        // Retrieve and return yakPak local store string and rehydrate it  (convert back to JSON)
        if (JSON.parse(window.localStorage.getItem('yakPak')) == null) {
            return {
                SelectedFacility: [],
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
        } else {
            return JSON.parse(window.localStorage.getItem('yakPak'));
        }
    }
}