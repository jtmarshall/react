import React, {Component} from 'react';
import api from '../components/actions/api';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import './manualCrawl.css';


class ManualCrawl extends Component {

    constructor(props) {
        super(props);

        this.state = {
            crawlDomain: '',
            userEmail: '',
            crawlType: '404',
            searchTerm: '',
        };
    }

    startCrawl = () => {
        // Get values from state
        let domain = this.state.crawlDomain;
        let email = this.state.userEmail;
        let cType = this.state.crawlType;
        let searchTerm = this.state.searchTerm;

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
        api.crawl.startCrawl(domain, email, cType, searchTerm).then(resp => {
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
    };

    // Set state for user email
    updateUserEmail = (val) => {
        this.setState({
            userEmail: val
        });
    };

    // Set state for user email
    updateSearchTerm = (val) => {
        this.setState({
            searchTerm: val
        });
    };

    // update crawl type selection
    handleSelect = val => {
        this.setState({
            crawlType: val
        });
    };

    render() {
        return (
            <div className="content">
                <h3>Crawl Domain</h3>

                <form className="" noValidate autoComplete="off">
                    <p>
                        Trigger a crawl and receive report in your email.
                        <br/>
                        Crawl times vary by domain.
                    </p>
                    <FormControl className="">
                        <InputLabel htmlFor="filterCrawlType">Crawl Type</InputLabel>
                        <Select
                            style={{width: '120px', color: '#ff9800'}}
                            value={this.state.crawlType}
                            onChange={(e) => this.handleSelect(e.target.value)}
                            inputProps={{
                                name: 'crawlType',
                                id: 'filterCrawlType',
                            }}
                        >
                            <MenuItem value={'404'}>404</MenuItem>
                            <MenuItem value={'sitemap'}>Sitemap</MenuItem>
                            <MenuItem value={'search'}>Search</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    {this.state.crawlType === "search" &&
                    <span>
                        <TextField
                            required
                            id="standard-required"
                            label="Search Term"
                            defaultValue={this.state.searchTerm}
                            onChange={(e) => this.updateSearchTerm(e.target.value)}
                            className="textField"
                            margin="normal"
                        />
                        <br/>
                    </span>

                    }
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