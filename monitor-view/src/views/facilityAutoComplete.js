import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Downshift from 'downshift';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import Chip from 'material-ui/Chip';

const suggestions = [
    { label: 'Acadia Healthcare' },
    { label: 'Acadia Montana' },
    { label: 'Acadiana' },
    { label: 'Vermilion' },
    { label: 'Anchorage CTC' },
    { label: 'Ann Arbor CTC' },
    { label: 'Ascent' },
    { label: 'Azure Acres' },
    { label: 'Baton Rouge CTC' },
    { label: 'Bayside Marin' },
    { label: 'Belle of Oaks' },
    { label: 'Belmont' },
    { label: 'Beloit CTC' },
    { label: 'Blue Ridge' },
    { label: 'Boston CTC' },
    { label: 'Bowling Green' },
    { label: 'Brattleboro CTC' },
    { label: 'Burkwood' },
    { label: 'The Camp' },
    { label: 'Cape Cod CTC' },
    { label: 'Carolina House' },
    { label: 'Cartersville CTC' },
    { label: 'Cascade' },
    { label: 'Cedar Crest' },
    { label: 'Cedar Rapids CTC' },
    { label: 'Center for Hope' },
    { label: 'Centerpointe' },
    { label: 'Central Virginia CTC' },
    { label: 'Christian Addiction' },
    { label: 'Claymont CTC' },
    { label: 'Cove Forge' },
    { label: 'Covington' },
    { label: 'CRC Health' },
    { label: 'Crestwyn' },
    { label: 'Cross Creek' },
    { label: 'Wichita CTC' },
    { label: 'Detroit Behavioral' },
    { label: 'Delta' },
    { label: 'Desert Hills' },
    { label: 'Drug-Addiction' },
    { label: 'Drug-Rehabs' },
    { label: 'Duffys' },
    { label: 'East Wisconsin CTC' },
    { label: 'North West Wisconsin CTC' },
    { label: 'Fitchburg CTC' },
    { label: 'Four Circles' },
    { label: 'Galax' },
    { label: 'Greenleaf' },
    { label: 'Harbor Oaks' },
    { label: 'Harmony' },
    { label: 'Highland Ridge' },
    { label: 'Huntington Creek' },
    { label: 'Indiana CTC' },
    { label: 'Inland Empire CTC' },
    { label: 'North Florida CTC' },
    { label: 'Keystone' },
    { label: 'Lakeland' },
    { label: 'Lakeview' },
    { label: 'Life Healing' },
    { label: 'Longleaf' },
    { label: 'Madison CTC' },
    { label: 'Maine CTC' },
    { label: 'Maryland CTC' },
    { label: 'Meadow Wood' },
    { label: 'Medford CTC' },
    { label: 'Methadone-Clinic' },
    { label: 'Millcreek Behavioral' },
    { label: 'Millcreek of Magee' },
    { label: 'Millcreek of Pontotoc' },
    { label: 'Milwaukee CTC' },
    { label: 'Mirror Lake' },
    { label: 'Montecatini' },
    { label: 'Mount Regis' },
    { label: 'Northeast Massachusetts CTC' },
    { label: 'Northeast Pennsylvania CTC' },
    { label: 'New Hampshire CTC' },
    { label: 'North Tampa' },
    { label: 'Oasis' },
    { label: 'Ohio Hospital' },
    { label: 'Options' },
    { label: 'Pacific Grove' },
    { label: 'Desert CTC' },
    { label: 'Park Royal' },
    { label: 'Physician Career Line' },
    { label: 'Piney Ridge' },
    { label: 'Pocono' },
    { label: 'Portland CTC' },
    { label: 'Racine CTC' },
    { label: 'Rebound' },
    { label: 'Red River' },
    { label: 'Resolute' },
    { label: 'Resource' },
    { label: 'Riverview' },
    { label: 'Riverwoods' },
    { label: 'Rolling Hills' },
    { label: 'The Rose' },
    { label: 'Sacramento CTC' },
    { label: 'Sandhills CTC' },
    { label: 'San Diego CTC' },
    { label: 'San Jose' },
    { label: 'San Juan Capestrano' },
    { label: 'Southeast Massachusetts CTC' },
    { label: 'Southeastern Pennsylvania CTC' },
    { label: 'Serenity House' },
    { label: 'Serenity Knolls' },
    { label: 'Seven Hills' },
    { label: 'Shaker Clinic' },
    { label: 'Sierra Tucson' },
    { label: 'The Landing' },
    { label: 'Sober Living' },
    { label: 'Sonora' },
    { label: 'South Amboy CTC' },
    { label: 'Southcoast Behavioral' },
    { label: 'Southern California CTC' },
    { label: 'Southwood' },
    { label: 'Spokane CTC' },
    { label: 'Springfield CTC' },
    { label: 'Starlite' },
    { label: 'StoneCrest' },
    { label: 'Structure House' },
    { label: 'Sunrise' },
    { label: 'SUWS Carolina' },
    { label: 'Temecula CTC' },
    { label: 'Ten Lakes' },
    { label: 'Manor Clinic' },
    { label: 'The Refuge' },
    { label: 'Timberline Knolls' },
    { label: 'Treatment Placement Specialists' },
    { label: 'Twelve Oaks' },
    { label: 'Utah CTC' },
    { label: 'Valley' },
    { label: 'Vantage Point' },
    { label: 'Village' },
    { label: 'Wausau CTC' },
    { label: 'Wellness' },
    { label: 'Western North Carolina CTC' },
    { label: 'Western Michigan CTC' },
    { label: 'Western Pennsylvania CTC' },
    { label: 'Western Virginia CTC' },
    { label: 'Western Washington CTC' },
    { label: 'West Virginia CTC' },
    { label: 'White Deer Run' },
    { label: 'Willamette Valley CTC' },
    { label: 'Wilmington' },
    { label: 'Youth Care' },
];

function renderInput(inputProps) {
    const { InputProps, classes, ref, ...other } = inputProps;

    return (
        <TextField
            InputProps={{
                inputRef: ref,
                classes: {
                    root: classes.inputRoot,
                },
                ...InputProps,
            }}
            {...other}
        />
    );
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
        const { classes } = this.props;
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
                    <div className={classes.container}>
                        {renderInput({
                            fullWidth: true,
                            classes,
                            InputProps: getInputProps({
                                startAdornment: selectedItem.map(item => (
                                    <Chip
                                        key={item}
                                        tabIndex={-1}
                                        label={item}
                                        className={classes.chip}
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
                            <Paper className={classes.paper} square>
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

FacilityAutoComplete.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 250
    },
    container: {
        flexGrow: 1,
        position: 'relative',
        width: "80%",
        marginLeft: "10%"
    },
    paper: {
        position: 'fixed',
        zIndex: 1,
        marginTop: theme.spacing.unit,

    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    inputRoot: {
        flexWrap: 'wrap',
    },
});

export default withStyles(styles)(FacilityAutoComplete);