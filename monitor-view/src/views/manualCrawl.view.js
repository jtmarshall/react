import React, {Component} from 'react';
import api from '../components/actions/api';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './manualCrawl.css';


class ManualCrawl extends Component {

    constructor(props) {
        super(props);

        this.state = {
            crawlDomain: "",
            userEmail: ""
        };
    }

    startCrawl = () => {
        // Get values from state
        let domain = this.state.crawlDomain;
        let email = this.state.userEmail;

        domain.replace('https://', '');
        domain.replace('http://', '');
        console.log(domain);

        // Check for empty values & acadia email
        if (domain.length < 2 || email.length < 2) {
            return alert('Domain/Email Invalid');
        } else if (email.indexOf("@acadiahealthcare.com") < 0) {
            return alert('Requires Acadia Email');
        }

        // Start request for crawl
        api.crawl.startCrawl(domain, email).then(resp => {
            alert(resp);
        });
    };

    // Set state for domain
    updateDomain = (val) => {
        // Remove protocols and trailing slash
        val = val.replace('https://', '');
        val = val.replace('http://', '');
        val = val.replace(/\/$/, "");

        this.setState({
            crawlDomain: val
        });
        console.log(this.state);
    };

    // Set state for user email
    updateUserEmail = (val) => {
        this.setState({
            userEmail: val
        });
        console.log(this.state);
    };

    render() {
        return (
            <div className="content">
                <h3>Crawl Domain</h3>

                <form className="" noValidate autoComplete="off">
                    <p>
                        Trigger a crawl and receive errors to your email.
                        <br/>
                        Crawl times vary by domain.
                    </p>
                    <TextField
                        required
                        id="standard-required"
                        label="Domain"
                        defaultValue={this.state.crawlDomain}
                        onChange={(e) => this.updateDomain(e.target.value)}
                        className="textField"
                        margin="normal"
                    />
                    <br/>
                    <TextField
                        required
                        id="standard-required"
                        label="Email"
                        defaultValue={this.state.userAgent}
                        onChange={(e) => this.updateUserEmail(e.target.value)}
                        className="textField"
                        margin="normal"
                    />
                    <br/>
                    <Button variant="contained" color="primary" className="" onClick={this.startCrawl}>
                        Start Crawl
                    </Button>
                </form>
            </div>
        );
    }
}

export default ManualCrawl;