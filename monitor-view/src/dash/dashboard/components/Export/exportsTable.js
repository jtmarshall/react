import React from 'react';
import moment from 'moment';
import withStyles from "@material-ui/core/styles/withStyles";
import Table from '../../tools/table.js';
import Card from '../../tools/Card/Card';
import CardHeader from "../../tools/Card/CardHeader";
import CardBody from '../../tools/Card/CardBody';
import MaterialIcon from 'material-icons-react';


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
    }
  };

function ExportsTable(props) {
    const { classes } = props;
    return (
        <div>
            <Card>
                <CardHeader color="mint">
                    <h4 className={classes.cardTitleWhite}>Export Status</h4>
                </CardHeader>
                <CardBody>
                    <Table
                    tableHeaderColor="primary"
                    tableHead={["Export Name", "", "Facility", "Options", "Email", "Time"]}
                    tableData={[
                        ["Bayside-Direct (5/1-5/31)", <MaterialIcon icon='cloud_download' color='#00C853' />, "Bayside Marin", "Direct,All,Google", "jon.snow@acadiahealthcare.com", moment().format("lll")],
                        ["All-Email-Other (6/19-6/20)", <MaterialIcon icon='cloud_download' color='#00C853' />, "All Facilities", "Email,Lead Gen,Other", "tyrion.lannister@acadiahealthcare.com", moment().format("lll")],
                        ["All-LinkedIn (6/10-6/17)", <MaterialIcon icon='cloud_download' color='#00C853' />, "All Facilities", "Organic,Social,LinkedIn", "little.finger@acadiahealthcare.com", moment().format("lll")],
                        ["Galax-PaidAd (5/1-7/1)", <MaterialIcon icon='cloud_download' color='#00C853' />, "Galax", "PaidAd,All,GDN", "eddard.stark@acadiahealthcare.com", moment().format("lll")],
                    ]}
                    />
                </CardBody>
            </Card>
        </div>
    );
}

export default withStyles(styles)(ExportsTable);
