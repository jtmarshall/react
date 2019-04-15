import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    root: {
        width: '90%',
        margin: 'auto',
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

// Subtext on stepper numbers
function getSteps() {
    return ['Input some facility info', 'Maybe some more info', 'Double check that info, then display'];
}

class FacilityFormStepper extends React.Component {
    state = {
        activeStep: 0,
        formAdmits: '',
        formInquiries: '',
    };

    getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return(
                    <div style={{display: 'block'}}>
                        <TextField
                            id="admits"
                            label="Admits"
                            type="number"
                            value={this.state.formAdmits}
                            onChange={this.handleFormChange('formAdmits')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="inquiries"
                            label="Inquiries"
                            type="number"
                            value={this.state.formInquiries}
                            onChange={this.handleFormChange('formInquiries')}
                            margin="normal"
                        />
                    </div>
                );
            case 1:
                return 'Other settings for that data';
            case 2:
                return 'Now we\'re cookin!';
            default:
                return 'Unknown stepIndex';
        }
    };

    handleFormChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
        console.log(this.state);
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <Typography component={'span'} className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={this.handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography component={'span'} className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" onClick={this.handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

FacilityFormStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(FacilityFormStepper);