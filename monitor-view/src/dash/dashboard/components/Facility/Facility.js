import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '../../tools/Card/Card';
import CardHeader from "../../tools/Card/CardHeader";
import CardBody from '../../tools/Card/CardBody';
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import MaterialIcon from 'material-icons-react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacilityVolume from './FacilityVolume';
import FacilityFormStepper from './facilityForm';
import moment from 'moment';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FacilityAdmitsGoal from './facilityAdmitsGoal';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';


const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    cardConversionGraph: {
        width: '90%',
        margin: '0 6px',
    },
    cardConversionTable: {
        overflowX: 'auto',
    },
};

const logoURL = "https://s3.amazonaws.com/acadia-yak/facility_logos/";

class Facility extends Component {
    constructor(props) {
        super(props);

        if (this.props.parentState.SelectedFacility.length > 1) {
            alert('This page can show only one facility report at a time. \n Remove the extras and reload the page.');
        }
    }

    state = {
        fName: this.props.parentState.SelectedFacility[0] || 'Acadia Facility',
        fLogo: 'LOGO HERE',
        fType: 'Inpatient',
        fLoc: 'location',
        fDomain: this.props.parentState.SelectedFacilityDomain || 'domain',
        fAddress: 'Facility Address',
        fPhone: 'Facility Phone',
        commentBox: '',
        spendCommentBox: '',
        webformsCommentBox: '',
        admitsCommentBox: '',
        inquiriesCommentBox: '',
        callsCommentBox: '',
        trafficCommentBox: '',
        cpaCommentBox: '',
        month: moment(this.props.parentState.DateFrame.To).format('MMMM YYYY'),
        momLabel: moment(this.props.parentState.DateFrame.To).format('MMM \'YY') + '/' + moment(this.props.parentState.DateFrame.To).add(-1, 'M').format('MMM \'YY'),
        ytd: moment(this.props.parentState.DateFrame.To).format('MMM YYYY'),
        ytdPrevious: moment(this.props.parentState.DateFrame.To).add(-1, 'y').format('MMM YYYY'),
    };

    componentDidMount() {
        // Check if we have a facility then create logo url string to show logo
        if (this.state.fDomain !== 'domain') {
            this.setState({
                fLogo: logoURL + this.props.parentState.SelectedFacilityDomain + "-logo.png",
            });

            document.title = "YAK - " + this.state.fName;
        }
    }

    // Load selected facility into view
    loadFacility = (facility) => {
        this.setState({
            fName: '',
            fLogo: '',
            fType: '',
            fLoc: '',
        })
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    pxToMm = (px) => {
        return Math.floor(px/document.getElementById('captureArea').offsetHeight);
    };

    mmToPx = (mm) => {
        return document.getElementById('captureArea').offsetHeight*mm;
    };

    range = (start, end) => {
        return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});
    };


    // printReport = () => {
    //     // html2canvas(document.querySelector("#captureArea")).then(canvas => {
    //     //     document.body.appendChild(canvas)
    //     // });
    //
    //     const input = document.getElementById('captureArea');
    //     const inputHeightMm = this.pxToMm(input.offsetHeight);
    //     const a4WidthMm = 210;
    //     const a4HeightMm = 297;
    //     const a4HeightPx = this.mmToPx(a4HeightMm);
    //     const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm/a4HeightMm) + 1;
    //     console.log({
    //         input, inputHeightMm, a4HeightMm, a4HeightPx, numPages, range: this.range(0, numPages),
    //         comp: inputHeightMm <= a4HeightMm, inputHeightPx: input.offsetHeight
    //     });
    //
    //     html2canvas(input)
    //         .then((canvas) => {
    //             const imgData = canvas.toDataURL('image/png');
    //
    //             // standard a4
    //             let pdf = new jsPDF();
    //             // Document of a4WidthMm wide and inputHeightMm high
    //             if (inputHeightMm > a4HeightMm) {
    //                 // elongated a4 (system print dialog will handle page breaks)
    //                 pdf = new jsPDF('p', 'mm', [inputHeightMm+16, a4WidthMm]);
    //             }
    //
    //             pdf.addImage(imgData, 'PNG', 0, 0);
    //             pdf.save(`${this.state.fName}.pdf`);
    //         });
    //
    //     console.log("Printing PDF Report");
    // };

    render() {
        const {classes} = this.props;
        // Concatenate logo url together
        const fLogo = logoURL + this.props.parentState.SelectedFacilityDomain + "-logo.png";
        // Set facility css rel; stripping out www. and .com
        const facilityStyle = this.state.fDomain.replace(/(www\.)/, '').replace(/(\.com)/, '');
        console.log(facilityStyle);

        return (
            <div id='captureArea' className='facilityComponent' rel={facilityStyle}>

                <div className="row" style={{display: 'inline-flex', width: '90%'}}>
                    <Card className='facilityProfileCard'>
                        <CardMedia
                            component="img"
                            alt="Facility Logo"
                            style={{maxWidth: '60%', margin: 'auto'}}
                            height="auto"
                            image={fLogo}
                        />
                        <CardContent style={{padding: '8px'}}>
                            <h5><strong>Monthly Report:</strong></h5>
                            <span id='monthText'>
                                <strong>{this.state.month}</strong>
                            </span>
                            <h6>Facility:</h6>
                            <span id='facilityNameText'>
                                {this.props.parentState.SelectedFacility[0]}
                            </span>
                        </CardContent>
                    </Card>

                    <FacilityAdmitsGoal color={"info"} title={"Admits Goal"}/>

                    {/*<div style={{width: '40%', margin: 'auto'}}>*/}
                        {/*<img id='facilityLogo' src={fLogo} style={{width: '50%'}} alt="logo"/>*/}
                        {/*<h3><b><em>Summary</em></b></h3>*/}
                    {/*</div>*/}
                    <div style={{width: '80%', margin: 'auto'}}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Highlights"
                            multiline
                            rows="10"
                            rowsMax="12"
                            value={this.state.commentBox}
                            onChange={this.handleChange('commentBox')}
                            margin="normal"
                            variant="outlined"
                            style={{minWidth: '80%', marginTop: '25px', overflowX: 'hidden'}}
                        />
                    </div>
                </div>

                <Card id="statsSummary">
                    <CardHeader className="facilityCardHeader" color="prime">
                        <h4 className="cardTitleWhite">Stats Summary</h4>
                    </CardHeader>
                    <CardBody style={{display: 'inline-flex'}}>
                        <Table className={classes.table} style={{width: '60%'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">MoM {this.state.momLabel}</TableCell>
                                    <TableCell align="center">YTD {this.state.ytd}</TableCell>
                                    <TableCell align="center">YTD {this.state.ytdPrevious}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key='spend'>
                                    <TableCell component="th" scope="row" className="tableRowHeader">
                                        Spend
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_down' color='#f44336'/>
                                        <span className="iconText">
                                            <span style={{color: '#f44336'}}> -6%</span> (184)
                                        </span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_down' color='#f44336'/>
                                        <span className="iconText">
                                            <span style={{color: '#f44336'}}> -6%</span> (184)
                                        </span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_up' color='#4caf50'/>
                                        <span className="iconText">
                                            <span style={{color: '#4caf50'}}> 6%</span> (184)
                                        </span>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='webforms'>
                                    <TableCell component="th" scope="row" className="tableRowHeader">
                                        Webforms
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_down' color='#f44336'/>
                                        <span className="iconText"> -6% (184)</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_up' color='#4caf50'/>
                                        <span className="iconText"> 6% (184)</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_down' color='#f44336'/>
                                        <span className="iconText"> -6% (184)</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='admits'>
                                    <TableCell component="th" scope="row" className="tableRowHeader">
                                        Admits
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_down' color='#f44336'/>
                                        <span className="iconText"> -6% (184)</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_up' color='#4caf50'/>
                                        <span className="iconText"> 6% (184)</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_up' color='#4caf50'/>
                                        <span className="iconText"> 6% (184)</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='inquiries'>
                                    <TableCell component="th" scope="row" className="tableRowHeader">
                                        Inquiries
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_up' color='#4caf50'/>
                                        <span className="iconText"> 6% (184)</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_down' color='#f44336'/>
                                        <span className="iconText"> -6% (184)</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_up' color='#4caf50'/>
                                        <span className="iconText"> 6% (184)</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='calls'>
                                    <TableCell component="th" scope="row" className="tableRowHeader">
                                        Calls
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_up' color='#4caf50'/>
                                        <span className="iconText"> 6% (184)</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_up' color='#4caf50'/>
                                        <span className="iconText"> 6% (184)</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_up' color='#4caf50'/>
                                        <span className="iconText"> 6% (184)</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='traffic'>
                                    <TableCell component="th" scope="row" className="tableRowHeader">
                                        Traffic
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_down' color='#f44336'/>
                                        <span className="iconText"> -6% (184)</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_up' color='#4caf50'/>
                                        <span className="iconText"> 6% (184)</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_down' color='#f44336'/>
                                        <span className="iconText"> -6% (184)</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow key='cpa'>
                                    <TableCell component="th" scope="row" className="tableRowHeader">
                                        CPA
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_down' color='#f44336'/>
                                        <span className="iconText"> -6% (184)</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_up' color='#4caf50'/>
                                        <span className="iconText"> 6% (184)</span>
                                    </TableCell>
                                    <TableCell align="center">
                                        <MaterialIcon icon='trending_down' color='#f44336'/>
                                        <span className="iconText"> -6% (184)</span>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                        <Table className={classes.table} style={{width: '40%', borderLeft: '2px solid #222'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Non-Data Highlights</TableCell>
                                    <TableCell align="center">Comments</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key='websiteUpdates'>
                                    <TableCell component="th" scope="row" align="center">
                                        <MaterialIcon icon='important_devices' color='#03B5E2'/>
                                        <span className="iconText"> Website Updates</span>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label=""
                                            multiline
                                            rows="1"
                                            rowsMax="4"
                                            value={this.state.cpaCommentBox}
                                            onChange={this.handleChange('cpaCommentBox')}
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            style={{minWidth: '100%'}}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow key='branding'>
                                    <TableCell component="th" scope="row" align="center">
                                        <MaterialIcon icon='security' color='#03B5E2'/>
                                        <span className="iconText"> Branding</span>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label=""
                                            multiline
                                            rows="1"
                                            rowsMax="4"
                                            value={this.state.cpaCommentBox}
                                            onChange={this.handleChange('cpaCommentBox')}
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            style={{minWidth: '100%'}}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow key='emailMarketing'>
                                    <TableCell component="th" scope="row" align="center">
                                        <MaterialIcon icon='alternate_email' color='#03B5E2'/>
                                        <span className="iconText"> Email Marketing</span>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label=""
                                            multiline
                                            rows="1"
                                            rowsMax="4"
                                            value={this.state.cpaCommentBox}
                                            onChange={this.handleChange('cpaCommentBox')}
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            style={{minWidth: '100%'}}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow key='collateral'>
                                    <TableCell component="th" scope="row" align="center">
                                        <MaterialIcon icon='description' color='#03B5E2'/>
                                        <span className="iconText"> Collateral</span>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label=""
                                            multiline
                                            rows="1"
                                            rowsMax="4"
                                            value={this.state.cpaCommentBox}
                                            onChange={this.handleChange('cpaCommentBox')}
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            style={{minWidth: '100%'}}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow key='globalUpdates'>
                                    <TableCell component="th" scope="row" align="center">
                                        <MaterialIcon icon='cloud_done' color='#03B5E2'/>
                                        <span className="iconText"> Global Updates</span>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label=""
                                            multiline
                                            rows="1"
                                            rowsMax="4"
                                            value={this.state.cpaCommentBox}
                                            onChange={this.handleChange('cpaCommentBox')}
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            style={{minWidth: '100%'}}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow key='adVideo'>
                                    <TableCell component="th" scope="row" align="center">
                                        <MaterialIcon icon='play_circle_filled' color='#03B5E2'/>
                                        <span className="iconText"> Ad & Video</span>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label=""
                                            multiline
                                            rows="1"
                                            rowsMax="4"
                                            value={this.state.cpaCommentBox}
                                            onChange={this.handleChange('cpaCommentBox')}
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            style={{minWidth: '100%'}}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow key='nonDataPoint'>
                                    <TableCell component="th" scope="row" align="center">
                                        <MaterialIcon icon='flag' color='#03B5E2'/>
                                        <span className="iconText"> Non-Data Point</span>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label=""
                                            multiline
                                            rows="1"
                                            rowsMax="4"
                                            value={this.state.cpaCommentBox}
                                            onChange={this.handleChange('cpaCommentBox')}
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            style={{minWidth: '100%'}}
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardBody>
                </Card>

                <hr className="hidePrint" style={{width: '90%'}}/>
                <FacilityVolume parentState={this.state} logo={fLogo}/>
                <hr style={{width: '90%'}}/>

                <FacilityFormStepper/>

                <ExpansionPanel style={{width: '90%', display: 'inline-block', background: 'none', boxShadow: 'none'}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography>Supporting Data</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        Dis is data.
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

export default withStyles(styles)(Facility);