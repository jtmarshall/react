import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Downshift from 'downshift';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import Chip from 'material-ui/Chip';
import api from "../components/actions/api";

let suggestions = [];

function renderInput(inputProps) {
    const { InputProps, ref, ...other } = inputProps;

    return (
        <TextField
            InputProps={{
                inputRef: ref,
                classes: {
                    root: 'autoComplete-inputRoot',
                },
                ...InputProps,
            }}
            {...other}
        />
    );
}

// Get list of facility/domain pairs
function retrieveList() {
    // Get weekly status
    api.facility.getFacilityList().then(resp => {
        suggestions = [];
        for (let key in resp) {
            suggestions.push(
                {
                    label: resp[key],
                    url: key
                }
            )
        }
    });
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

    return (
        <MenuItem
            {...itemProps}
            key={suggestion.label}
            selected={isHighlighted}
            component="div"
            style={{
                fontWeight: isSelected ? 500 : 400,
            }}
        >
            {suggestion.label}
        </MenuItem>
    );
}
renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

function getSuggestions(inputValue) {
    let count = 0;

    return suggestions.filter(suggestion => {
        const keep =
            (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
            count < 10;  // max suggestions to show

        if (keep) {
            count += 1;
        }

        return keep;
    });
}


class FacilityAutoComplete extends React.Component {

    constructor(props) {
        super(props);

        if (suggestions.length < 1) {
            retrieveList();
        }
    }

    // Check local storage for saved facilities
    savedFacilities = localStorage.getItem("selectedFacilities") != null ?
        localStorage.getItem("selectedFacilities") : [];

    state = {
        inputValue: '',
        selectedItem: this.savedFacilities.length > 0 ? this.savedFacilities.split(',') : [],
    };

    handleKeyDown = event => {
        let { inputValue, selectedItem } = this.state;
        if (selectedItem.length && !inputValue.length && keycode(event) === 'backspace') {
            selectedItem = selectedItem.slice(0, selectedItem.length - 1);
            this.setState({
                selectedItem
            });

            // Pass updated selected facilities back to parent component
            this.props.onUpdate(selectedItem);
            localStorage.setItem("selectedFacilities", selectedItem);
        }
    };

    handleInputChange = event => {
        this.setState({ inputValue: event.target.value });
    };

    handleChange = item => {
        let { selectedItem } = this.state;

        if (selectedItem.indexOf(item) === -1) {
            selectedItem = [...selectedItem, item];
        }

        this.setState({
            inputValue: '',
            selectedItem,
        });

        // Pass updated selected facilities back to parent component
        this.props.onUpdate(selectedItem);
        localStorage.setItem("selectedFacilities", selectedItem);
    };

    handleDelete = item => () => {
        const selectedItem = [...this.state.selectedItem];
        selectedItem.splice(selectedItem.indexOf(item), 1);

        this.setState({ selectedItem });

        // Pass updated selected facilities back to parent component
        this.props.onUpdate(selectedItem);
        localStorage.setItem("selectedFacilities", selectedItem);
    };

    render() {
        const { inputValue, selectedItem } = this.state;

        return (
            <Downshift inputValue={inputValue} onChange={this.handleChange} selectedItem={selectedItem}>
                {({
                      getInputProps,
                      getItemProps,
                      isOpen,
                      inputValue: inputValue2,
                      selectedItem: selectedItem2,
                      highlightedIndex,
                  }) => (
                    <div className='autoComplete-container'>
                        {renderInput({
                            fullWidth: true,
                            InputProps: getInputProps({
                                startAdornment: selectedItem.map(item => (
                                    <Chip
                                        key={item}
                                        tabIndex={-1}
                                        label={item}
                                        className='autoComplete-chip'
                                        onDelete={this.handleDelete(item)}
                                    />
                                )),
                                onChange: this.handleInputChange,
                                onKeyDown: this.handleKeyDown,
                                placeholder: 'Search facility',
                                id: 'integration-downshift-multiple',
                            }),
                        })}
                        {isOpen ? (
                            <Paper className='autoComplete-paper' square>
                                {getSuggestions(inputValue2).map((suggestion, index) =>
                                    renderSuggestion({
                                        suggestion,
                                        index,
                                        itemProps: getItemProps({ item: suggestion.label }),
                                        highlightedIndex,
                                        selectedItem: selectedItem2,
                                    }),
                                )}
                            </Paper>
                        ) : null}
                    </div>
                )}
            </Downshift>
        );
    }
}

export default FacilityAutoComplete;