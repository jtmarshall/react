import React, {Component} from 'react';
import FofTable from '../components/fofTable';
import api from '../components/actions/api';


class FofView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fofList: {},
        };

        // Initiate request on startup
        this.retrieve();
    }

    retrieve = () => {
        // Request for 404's
        api.fof.get404List().then(resp => {
            this.setState({
                fofList: resp
            });
        });
    };

    render() {
        let selected = this.props.selected;
        let fof = this.state.fofList;

        if (this.props.selected.length > 0) {
            return (
                <div className="content">
                    <h3>404's</h3>
                    {fof ? (Object.keys(fof).map((keyName, keyIndex) => {
                        if (selected.includes(fof[keyName][0].FacilityName.String)) {
                            // Use keyName to get current key's name, domainObj[keyName] to get value
                            return (<FofTable
                                facility={fof[keyName][0].FacilityName.String}
                                domain={keyName}
                                key={keyIndex}
                                data={fof[keyName]}
                            />);
                        }
                    })) : (<p> Could Not Get Data </p>)
                    }
                </div>
            );
        } else {
            return (
                <div className="content">
                    <h3>404's</h3>
                    {fof ? (Object.keys(fof).map((keyName, keyIndex) => {
                        // Use keyName to get current key's name, domainObj[keyName] to get value
                        return (<FofTable
                            facility={fof[keyName][0].FacilityName.String}
                            domain={keyName}
                            key={keyIndex}
                            data={fof[keyName]}
                        />);
                    })) : (<p> Could Not Get Data </p>)
                    }
                </div>
            );
        }
    }
}

export default FofView;