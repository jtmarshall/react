import React from 'react';
import MaterialIcon from 'material-icons-react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


class SKUFilter extends React.Component {

    currentFilter = this.props.selected;
    rightDrawer = this.props.rightDrawer;

    state = {
        Filter: this.currentFilter,
        right: this.rightDrawer
    };

    toggleDrawer = (side) => () => {

        if (this.state.right) {
            this.setState({
                [side]: false,
            });
        } else {
            this.setState({
                [side]: true,
            });
        }

    };

    // update sku filter state
    handleSelect = name => event => {
        // console.log(event.target.name, event.target.value);
        // dummy object so we don't clear other filter values
        let dummyObj = this.state.Filter;
        dummyObj[name] = event.target.value;

        this.setState({
            Filter: dummyObj
        });
        // console.log(this.state.Filter);

        // re-assign dummyObj
        dummyObj = this.state.Filter;

        // send update to main state
        this.props.onUpdate(dummyObj);
    };

    // clear filters from state
    clearFilters = () => {
        let cleanFilter = {
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
        };

        this.setState({
            Filter: cleanFilter
        });

        this.props.onUpdate(cleanFilter);
    };

    render() {
        return (
            <div className="filterComponent">
                <Tooltip title="Show Filters" placement="bottom">
                    <Button onClick={this.toggleDrawer('right')} style={{top: '5px'}}>
                        <MaterialIcon icon='filter_list' size={24} color='#ff9800'/>
                    </Button>
                </Tooltip>

                <Drawer
                    anchor="right"
                    open={this.state.right}
                    onClose={this.toggleDrawer('right')}
                    style={{display: 'block'}}
                >
                    <div style={{margin: 'auto', position: 'absolute', bottom: '8px', left: '25%'}}>
                        <Button variant="contained"
                                style={{backgroundColor: '#ff9800', color: '#ffffff', margin: '5px'}}
                                onClick={() => {
                                    this.toggleDrawer('right', false);
                                    window.location.reload();
                                }}>
                            Apply
                        </Button>
                        <Button variant="contained" style={{margin: '5px'}}
                                onClick={() => {
                                    this.clearFilters();
                                    //window.location.reload();
                                }}>
                            Clear
                        </Button>
                    </div>
                    <div
                        style={{width: 400, padding: 20, paddingTop: 5, height: '90%', overflowY: 'scroll'}}
                        tabIndex={0}
                        role="button"
                        onKeyDown={this.toggleDrawer('right')}
                    >
                        <form className="skuFilter" noValidate autoComplete="off">
                            <FormControl className="">
                                <InputLabel htmlFor="filterConversion">Conversion</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.conversion}
                                    onChange={this.handleSelect('conversion')}
                                    inputProps={{
                                        name: 'conversion',
                                        id: 'filterConversion',
                                    }}
                                >
                                    <MenuItem value={'all'}>All</MenuItem>
                                    <MenuItem value={'phone'}>Phone Call</MenuItem>
                                    <MenuItem value={'webForm'}>Web Form</MenuItem>
                                    <MenuItem value={'tos5'}>5+ TOS</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterTouch">Touch</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.touch}
                                    onChange={this.handleSelect('touch')}
                                    inputProps={{
                                        name: 'touch',
                                        id: 'filterTouch',
                                    }}
                                >
                                    <MenuItem value={'first'}>First</MenuItem>
                                    <MenuItem value={'converting'}>Converting</MenuItem>
                                    <MenuItem value={'Latest'}>Latest</MenuItem>
                                    <MenuItem value={'contributing'}>Contributing</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterRollup">Rollup</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.rollup}
                                    onChange={this.handleSelect('rollup')}
                                    inputProps={{
                                        name: 'rollup',
                                        id: 'filterRollup',
                                    }}
                                >
                                    <MenuItem value={'direct'}>Direct</MenuItem>
                                    <MenuItem value={'email'}>Email</MenuItem>
                                    <MenuItem value={'organic'}>Organic</MenuItem>
                                    <MenuItem value={'paidAdvertising'}>Paid Advertising</MenuItem>
                                    <MenuItem value={'referring'}>Referring</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterChannel">Channel</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.channel}
                                    onChange={this.handleSelect('channel')}
                                    inputProps={{
                                        name: 'channel',
                                        id: 'filterChannel',
                                    }}
                                >
                                    <MenuItem value={'all'}>All</MenuItem>
                                    <MenuItem value={'direct'}>Direct</MenuItem>
                                    <MenuItem value={'email'}>Email</MenuItem>
                                    <MenuItem value={'email_leadGen'}>Email - Lead Gen</MenuItem>
                                    <MenuItem value={'email_other'}>Email - Other</MenuItem>
                                    <MenuItem value={'email_signUp'}>Email - Sign Up</MenuItem>
                                    <MenuItem value={'organic'}>Organic</MenuItem>
                                    <MenuItem value={'organic_other'}>Organic - Other</MenuItem>
                                    <MenuItem value={'organic_bing'}>Organic - Bing</MenuItem>
                                    <MenuItem value={'organic_google'}>Organic - Google</MenuItem>
                                    <MenuItem value={'organic_yahoo'}>Organic - Yahoo</MenuItem>
                                    <MenuItem value={'organic_other_search'}>Organic - Search - Other</MenuItem>
                                    <MenuItem value={'organic_facebook'}>Organic - Facebook</MenuItem>
                                    <MenuItem value={'organic_instagram'}>Organic - Instagram</MenuItem>
                                    <MenuItem value={'organic_linkedin'}>Organic - LinkedIn</MenuItem>
                                    <MenuItem value={'organic_pinterest'}>Organic - Pinterest</MenuItem>
                                    <MenuItem value={'organic_youtube'}>Organic - YouTube</MenuItem>
                                    <MenuItem value={'organic_other_social'}>Organic - Social - Other</MenuItem>
                                    <MenuItem value={'paidAdvertising'}>Paid Advertising</MenuItem>
                                    <MenuItem value={'referring'}>Referring</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Directories - Choose Help</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Directories - Choose Help -
                                        Alcohol</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Directories - Other</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Directories - Psych Today</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Directories - Psych Today -
                                        Alcohol</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Directories - Yellow Pages</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Directories - Yellow Pages -
                                        Alcohol</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Directories - Yelp</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Directories - Yelp - Alcohol</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Internal</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Internal - Acadia</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Internal - ARC</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Internal - Something Fishy</MenuItem>
                                    <MenuItem value={'referring'}>Referring - Other</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl className="">
                                <InputLabel htmlFor="filterSource">Source</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.source}
                                    onChange={this.handleSelect('source')}
                                    inputProps={{
                                        name: 'source',
                                        id: 'filterSource',
                                    }}
                                >
                                    <MenuItem value={'all'}>All</MenuItem>
                                    <MenuItem value={'acadia'}>Acadia</MenuItem>
                                    <MenuItem value={'arc'}>ARC</MenuItem>
                                    <MenuItem value={'bing'}>Bing</MenuItem>
                                    <MenuItem value={'chooseHelp'}>Choose Help</MenuItem>
                                    <MenuItem value={'exactTarget'}>Exact Target</MenuItem>
                                    <MenuItem value={'facebook'}>Facebook</MenuItem>
                                    <MenuItem value={'gdn'}>GDN</MenuItem>
                                    <MenuItem value={'google'}>Google</MenuItem>
                                    <MenuItem value={'guidedocs'}>Guidedocs</MenuItem>
                                    <MenuItem value={'healthyPlace'}>Healthy Place</MenuItem>
                                    <MenuItem value={'instagram'}>Instagram</MenuItem>
                                    <MenuItem value={'linkedIn'}>LinkedIn</MenuItem>
                                    <MenuItem value={'mediaMath'}>Media Math</MenuItem>
                                    <MenuItem value={'other'}>Other</MenuItem>
                                    <MenuItem value={'pinterest'}>Pinterest</MenuItem>
                                    <MenuItem value={'psychToday'}>Psych Today</MenuItem>
                                    <MenuItem value={'quora'}>Quora</MenuItem>
                                    <MenuItem value={'somethingFishy'}>Something Fishy</MenuItem>
                                    <MenuItem value={'tremor'}>Tremor</MenuItem>
                                    <MenuItem value={'yahoo'}>Yahoo</MenuItem>
                                    <MenuItem value={'yellowPages'}>Yellow Pages</MenuItem>
                                    <MenuItem value={'yelp'}>Yelp</MenuItem>
                                    <MenuItem value={'youtube'}>YouTube</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterCampaign">Campaign</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.campaign}
                                    onChange={this.handleSelect('campaign')}
                                    inputProps={{
                                        name: 'campaign',
                                        id: 'filterCampaign',
                                    }}
                                >
                                    <MenuItem value={'all'}>All</MenuItem>
                                    <MenuItem value={'alcohol'}>Alcohol</MenuItem>
                                    <MenuItem value={'amphetamine'}>Amphetamine</MenuItem>
                                    <MenuItem value={'cocaine'}>Cocaine</MenuItem>
                                    <MenuItem value={'opiate'}>Opiates</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterTier">Tier</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.tier}
                                    onChange={this.handleSelect('tier')}
                                    inputProps={{
                                        name: 'tier',
                                        id: 'filterTier',
                                    }}
                                >
                                    <MenuItem value={'all'}>All</MenuItem>
                                    <MenuItem value={'t1'}>T1</MenuItem>
                                    <MenuItem value={'t2'}>T2</MenuItem>
                                    <MenuItem value={'t3'}>T3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterMedium">Medium</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.medium}
                                    onChange={this.handleSelect('medium')}
                                    inputProps={{
                                        name: 'medium',
                                        id: 'filterMedium',
                                    }}
                                >
                                    <MenuItem value={'all'}>All</MenuItem>
                                    <MenuItem value={'directories'}>Directories</MenuItem>
                                    <MenuItem value={'internalDirectories'}>Internal Directories</MenuItem>
                                    <MenuItem value={'leadGen'}>Lead Gen</MenuItem>
                                    <MenuItem value={'other'}>Other</MenuItem>
                                    <MenuItem value={'placement'}>Placement</MenuItem>
                                    <MenuItem value={'search'}>Search</MenuItem>
                                    <MenuItem value={'searchEngine'}>Search Engine</MenuItem>
                                    <MenuItem value={'signUp'}>Sign Up</MenuItem>
                                    <MenuItem value={'social'}>Social</MenuItem>
                                    <MenuItem value={'sponsorship'}>Sponsorship</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterDisorder">Disorder</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.disorder}
                                    onChange={this.handleSelect('disorder')}
                                    inputProps={{
                                        name: 'disorder',
                                        id: 'filterDisorder',
                                    }}
                                >
                                    <MenuItem value={'all'}>All</MenuItem>
                                    <MenuItem value={'alcohol'}>Alcohol</MenuItem>
                                </Select>
                            </FormControl>

                            <h5 style={{marginBottom: 0, color: '#ff9800'}}>SKU</h5>

                            <FormControl className="">
                                <InputLabel htmlFor="filterNetwork">Network</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.network}
                                    onChange={this.handleSelect('network')}
                                    inputProps={{
                                        name: 'network',
                                        id: 'filterNetwork',
                                    }}
                                >
                                    <MenuItem value={'a0'}>All</MenuItem>
                                    <MenuItem value={'a1'}>Search</MenuItem>
                                    <MenuItem value={'a2'}>Display</MenuItem>
                                    <MenuItem value={'a3'}>Social</MenuItem>
                                    <MenuItem value={'a4'}>Email</MenuItem>
                                    <MenuItem value={'a5'}>Ad_Video</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterTargeting">Targeting</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.targetingMethod}
                                    onChange={this.handleSelect('targetingMethod')}
                                    inputProps={{
                                        name: 'targetingMethod',
                                        id: 'filterTargeting',
                                    }}
                                >
                                    <MenuItem value={'b0'}>All</MenuItem>
                                    <MenuItem value={'b1'}>KWD</MenuItem>
                                    <MenuItem value={'b2'}>MP</MenuItem>
                                    <MenuItem value={'b3'}>MP - KWD</MenuItem>
                                    <MenuItem value={'b4'}>Topic</MenuItem>
                                    <MenuItem value={'b5'}>Topic - KWD</MenuItem>
                                    <MenuItem value={'b6'}>Connection</MenuItem>
                                    <MenuItem value={'b7'}>Behavior</MenuItem>
                                    <MenuItem value={'b8'}>Demographic</MenuItem>
                                    <MenuItem value={'b9'}>Interest</MenuItem>
                                    <MenuItem value={'b10'}>Lookalike</MenuItem>
                                    <MenuItem value={'b11'}>Remarketing</MenuItem>
                                    <MenuItem value={'b12'}>Newsletter - About</MenuItem>
                                    <MenuItem value={'b13'}>Newsletter - Programs</MenuItem>
                                    <MenuItem value={'b14'}>Newsletter - Addiction</MenuItem>
                                    <MenuItem value={'b15'}>Newsletter - PTSD</MenuItem>
                                    <MenuItem value={'b16'}>Newsletter - MH</MenuItem>
                                    <MenuItem value={'b17'}>Run of Site</MenuItem>
                                    <MenuItem value={'b18'}>Geographic</MenuItem>
                                    <MenuItem value={'b19'}>Conversion</MenuItem>
                                    <MenuItem value={'b20'}>Newsletter - Mood</MenuItem>
                                    <MenuItem value={'b21'}>Custom Segments</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="filterFormat">Format</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.format}
                                    onChange={this.handleSelect('format')}
                                    inputProps={{
                                        name: 'format',
                                        id: 'filterFormat',
                                    }}
                                >
                                    <MenuItem value={'c0'}>All</MenuItem>
                                    <MenuItem value={'c1'}>CanvasAd</MenuItem>
                                    <MenuItem value={'c2'}>2 Headline</MenuItem>
                                    <MenuItem value={'c3'}>GIF</MenuItem>
                                    <MenuItem value={'c4'}>GmailAd</MenuItem>
                                    <MenuItem value={'c5'}>HTML</MenuItem>
                                    <MenuItem value={'c6'}>Image Carousel</MenuItem>
                                    <MenuItem value={'c7'}>Lightbox</MenuItem>
                                    <MenuItem value={'c8'}>Link Post</MenuItem>
                                    <MenuItem value={'c9'}>Photo Post</MenuItem>
                                    <MenuItem value={'c10'}>Responsive</MenuItem>
                                    <MenuItem value={'c11'}>Static Image</MenuItem>
                                    <MenuItem value={'c12'}>Video</MenuItem>
                                    <MenuItem value={'c13'}>Video Carousel</MenuItem>
                                    <MenuItem value={'c14'}>Long Content - No Image</MenuItem>
                                    <MenuItem value={'c15'}>Long Content - Image</MenuItem>
                                    <MenuItem value={'c16'}>Short Content - No Image</MenuItem>
                                    <MenuItem value={'c17'}>Short Content - Image</MenuItem>
                                    <MenuItem value={'c18'}>Banner</MenuItem>
                                    <MenuItem value={'c19'}>Profile</MenuItem>
                                    <MenuItem value={'c20'}>Text Ad</MenuItem>
                                    <MenuItem value={'c20'}>3 Headline</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="filterMessage">Message</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.message}
                                    onChange={this.handleSelect('message')}
                                    inputProps={{
                                        name: 'message',
                                        id: 'filterMessage',
                                    }}
                                >
                                    <MenuItem value={'d0'}>All</MenuItem>
                                    <MenuItem value={'d1'}>About - General</MenuItem>
                                    <MenuItem value={'d2'}>About - Other</MenuItem>
                                    <MenuItem value={'d3'}>About - Self</MenuItem>
                                    <MenuItem value={'d4'}>Benefits - General</MenuItem>
                                    <MenuItem value={'d5'}>Benefits - Other</MenuItem>
                                    <MenuItem value={'d6'}>Benefits - Self</MenuItem>
                                    <MenuItem value={'d7'}>Emotion - General</MenuItem>
                                    <MenuItem value={'d8'}>Emotion - Other</MenuItem>
                                    <MenuItem value={'d9'}>Emotion - Self</MenuItem>
                                    <MenuItem value={'d10'}>Leading - General</MenuItem>
                                    <MenuItem value={'d11'}>Leading - Other</MenuItem>
                                    <MenuItem value={'d12'}>Leading - Self</MenuItem>
                                    <MenuItem value={'d13'}>Scare - General</MenuItem>
                                    <MenuItem value={'d14'}>Scare - Other</MenuItem>
                                    <MenuItem value={'d15'}>Scare - Self</MenuItem>
                                    <MenuItem value={'d16'}>Stats - General</MenuItem>
                                    <MenuItem value={'d17'}>Stats - Other</MenuItem>
                                    <MenuItem value={'d18'}>Stats - Self</MenuItem>
                                    <MenuItem value={'d19'}>Urgent - General</MenuItem>
                                    <MenuItem value={'d20'}>Urgent - Other</MenuItem>
                                    <MenuItem value={'d21'}>Urgent - Self</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterAgeRange">Age Range</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.ageRange}
                                    onChange={this.handleSelect('ageRange')}
                                    inputProps={{
                                        name: 'ageRange',
                                        id: 'filterAgeRange',
                                    }}
                                >
                                    <MenuItem value={'e1'}>18 - 24</MenuItem>
                                    <MenuItem value={'e2'}>25 - 34</MenuItem>
                                    <MenuItem value={'e3'}>35 - 44</MenuItem>
                                    <MenuItem value={'e4'}>35 - 49</MenuItem>
                                    <MenuItem value={'e5'}>45 - 54</MenuItem>
                                    <MenuItem value={'e6'}>50 - 64</MenuItem>
                                    <MenuItem value={'e7'}>55 - 64</MenuItem>
                                    <MenuItem value={'e8'}>65+</MenuItem>
                                    <MenuItem value={'e9'}>All</MenuItem>
                                    <MenuItem value={'e10'}>Undetermined</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterEthnicity">Ethnicity</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.ethnicity}
                                    onChange={this.handleSelect('ethnicity')}
                                    inputProps={{
                                        name: 'ethnicity',
                                        id: 'filterEthnicity',
                                    }}
                                >
                                    <MenuItem value={'f9'}>All</MenuItem>
                                    <MenuItem value={'f1'}>African American</MenuItem>
                                    <MenuItem value={'f2'}>Asian</MenuItem>
                                    <MenuItem value={'f3'}>Hispanic</MenuItem>
                                    <MenuItem value={'f4'}>Native American</MenuItem>
                                    <MenuItem value={'f5'}>Pacific Islander</MenuItem>
                                    <MenuItem value={'f6'}>Two or more</MenuItem>
                                    <MenuItem value={'f7'}>White</MenuItem>
                                    <MenuItem value={'f8'}>Undetermined</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterFamilyRole">Family Role</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.familyRole}
                                    onChange={this.handleSelect('familyRole')}
                                    inputProps={{
                                        name: 'familyRole',
                                        id: 'filterFamilyRole',
                                    }}
                                >
                                    <MenuItem value={'g13'}>All</MenuItem>
                                    <MenuItem value={'g1'}>Brother</MenuItem>
                                    <MenuItem value={'g2'}>Daughter</MenuItem>
                                    <MenuItem value={'g3'}>Husband</MenuItem>
                                    <MenuItem value={'g4'}>Parent - Expecting</MenuItem>
                                    <MenuItem value={'g5'}>Parent - 0-12 Month</MenuItem>
                                    <MenuItem value={'g6'}>Parent - Pre-Teen</MenuItem>
                                    <MenuItem value={'g7'}>Parent - Teen</MenuItem>
                                    <MenuItem value={'g8'}>Parent - Adult Child</MenuItem>
                                    <MenuItem value={'g9'}>Sister</MenuItem>
                                    <MenuItem value={'g10'}>Son</MenuItem>
                                    <MenuItem value={'g11'}>Wife</MenuItem>
                                    <MenuItem value={'g12'}>Undetermined</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterGender">Gender</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.gender}
                                    onChange={this.handleSelect('gender')}
                                    inputProps={{
                                        name: 'gender',
                                        id: 'filterGender',
                                    }}
                                >
                                    <MenuItem value={'h4'}>All</MenuItem>
                                    <MenuItem value={'h1'}>Female</MenuItem>
                                    <MenuItem value={'h2'}>Male</MenuItem>
                                    <MenuItem value={'h3'}>Undetermined</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterIncome">Income</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.income}
                                    onChange={this.handleSelect('income')}
                                    inputProps={{
                                        name: 'income',
                                        id: 'filterIncome',
                                    }}
                                >
                                    <MenuItem value={'i12'}>All</MenuItem>
                                    <MenuItem value={'i1'}>39k or less</MenuItem>
                                    <MenuItem value={'i2'}>40k - 49k</MenuItem>
                                    <MenuItem value={'i3'}>50k - 74k</MenuItem>
                                    <MenuItem value={'i4'}>75k - 99k</MenuItem>
                                    <MenuItem value={'i5'}>100k - 124k</MenuItem>
                                    <MenuItem value={'i6'}>125k - 149k</MenuItem>
                                    <MenuItem value={'i7'}>150k - 249k</MenuItem>
                                    <MenuItem value={'i8'}>250k - 349k</MenuItem>
                                    <MenuItem value={'i9'}>350k - 499k</MenuItem>
                                    <MenuItem value={'i10'}>500k or more</MenuItem>
                                    <MenuItem value={'i11'}>Undetermined</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterInterestsBehaviors">Interest/Behavior</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.interestsBehaviors}
                                    onChange={this.handleSelect('interestsBehaviors')}
                                    inputProps={{
                                        name: 'interestsBehaviors',
                                        id: 'filterInterestsBehaviors',
                                    }}
                                >
                                    <MenuItem value={'j21'}>All</MenuItem>
                                    <MenuItem value={'j1'}>Away from Family</MenuItem>
                                    <MenuItem value={'j2'}>Away from Home</MenuItem>
                                    <MenuItem value={'j3'}>Business and Industry</MenuItem>
                                    <MenuItem value={'j4'}>Chronic Relapser</MenuItem>
                                    <MenuItem value={'j5'}>Democrat</MenuItem>
                                    <MenuItem value={'j6'}>Detox Seeker</MenuItem>
                                    <MenuItem value={'j7'}>Entertainment</MenuItem>
                                    <MenuItem value={'j8'}>Fitness and Wellness</MenuItem>
                                    <MenuItem value={'j9'}>Food and Drink</MenuItem>
                                    <MenuItem value={'j10'}>Friends of Alumni</MenuItem>
                                    <MenuItem value={'j11'}>LGBT Population</MenuItem>
                                    <MenuItem value={'j12'}>Outdoors</MenuItem>
                                    <MenuItem value={'j13'}>Politics</MenuItem>
                                    <MenuItem value={'j14'}>Previous Patient of Competitor</MenuItem>
                                    <MenuItem value={'j15'}>Republican</MenuItem>
                                    <MenuItem value={'j16'}>Shopping and Fashion</MenuItem>
                                    <MenuItem value={'j17'}>Sports</MenuItem>
                                    <MenuItem value={'j18'}>Technology</MenuItem>
                                    <MenuItem value={'j19'}>Travel</MenuItem>
                                    <MenuItem value={'j20'}>Undetermined</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterLanguage">Language</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.language}
                                    onChange={this.handleSelect('language')}
                                    inputProps={{
                                        name: 'language',
                                        id: 'filterLanguage',
                                    }}
                                >
                                    <MenuItem value={'k5'}>All</MenuItem>
                                    <MenuItem value={'k1'}>English</MenuItem>
                                    <MenuItem value={'k2'}>Spanish</MenuItem>
                                    <MenuItem value={'k3'}>Bilingual</MenuItem>
                                    <MenuItem value={'k4'}>Undetermined</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterEducation">Education</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.education}
                                    onChange={this.handleSelect('education')}
                                    inputProps={{
                                        name: 'education',
                                        id: 'filterEducation',
                                    }}
                                >
                                    <MenuItem value={'l11'}>All</MenuItem>
                                    <MenuItem value={'l1'}>Some High School</MenuItem>
                                    <MenuItem value={'l2'}>High School Grad</MenuItem>
                                    <MenuItem value={'l3'}>Associate Degree</MenuItem>
                                    <MenuItem value={'l4'}>Some College</MenuItem>
                                    <MenuItem value={'l5'}>College Grad</MenuItem>
                                    <MenuItem value={'l6'}>Professional Degree</MenuItem>
                                    <MenuItem value={'l7'}>Some Grad School</MenuItem>
                                    <MenuItem value={'l8'}>Masters Degree</MenuItem>
                                    <MenuItem value={'l9'}>Doctorate Degree</MenuItem>
                                    <MenuItem value={'l10'}>Undetermined</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterOccupation">Occupation</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.occupation}
                                    onChange={this.handleSelect('occupation')}
                                    inputProps={{
                                        name: 'occupation',
                                        id: 'filterOccupation',
                                    }}
                                >
                                    <MenuItem value={'m17'}>All</MenuItem>
                                    <MenuItem value={'m1'}>Admin</MenuItem>
                                    <MenuItem value={'m2'}>Arts</MenuItem>
                                    <MenuItem value={'m3'}>Business/Finance</MenuItem>
                                    <MenuItem value={'m4'}>Executive</MenuItem>
                                    <MenuItem value={'m5'}>Government</MenuItem>
                                    <MenuItem value={'m6'}>Healthcare</MenuItem>
                                    <MenuItem value={'m7'}>IT</MenuItem>
                                    <MenuItem value={'m8'}>Legal</MenuItem>
                                    <MenuItem value={'m9'}>Manufacturing</MenuItem>
                                    <MenuItem value={'m10'}>Sales</MenuItem>
                                    <MenuItem value={'m11'}>Service</MenuItem>
                                    <MenuItem value={'m12'}>Student - College</MenuItem>
                                    <MenuItem value={'m13'}>Student - Grad School</MenuItem>
                                    <MenuItem value={'m14'}>Student - High School</MenuItem>
                                    <MenuItem value={'m15'}>Unemployed</MenuItem>
                                    <MenuItem value={'m16'}>Undetermined</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="">
                                <InputLabel htmlFor="filterRelationship">Relationship</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.relationship}
                                    onChange={this.handleSelect('relationship')}
                                    inputProps={{
                                        name: 'relationship',
                                        id: 'filterRelationship',
                                    }}
                                >
                                    <MenuItem value={'n6'}>All</MenuItem>
                                    <MenuItem value={'n1'}>Divorced</MenuItem>
                                    <MenuItem value={'n2'}>Married</MenuItem>
                                    <MenuItem value={'n3'}>Separated</MenuItem>
                                    <MenuItem value={'n4'}>Single</MenuItem>
                                    <MenuItem value={'n5'}>Undetermined</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="filterReligion">Religion</InputLabel>
                                <Select
                                    className="skuFilterSelect"
                                    multiple
                                    value={this.state.Filter.religion}
                                    onChange={this.handleSelect('religion')}
                                    inputProps={{
                                        name: 'religion',
                                        id: 'filterReligion',
                                    }}
                                >
                                    <MenuItem value={'o11'}>All</MenuItem>
                                    <MenuItem value={'o1'}>Agnosticism</MenuItem>
                                    <MenuItem value={'o2'}>Atheism</MenuItem>
                                    <MenuItem value={'o3'}>Buddhism</MenuItem>
                                    <MenuItem value={'o4'}>Christianity</MenuItem>
                                    <MenuItem value={'o5'}>Hindu</MenuItem>
                                    <MenuItem value={'o6'}>Islam</MenuItem>
                                    <MenuItem value={'o7'}>Judaism</MenuItem>
                                    <MenuItem value={'o8'}>Mormonism</MenuItem>
                                    <MenuItem value={'o9'}>Sikhism</MenuItem>
                                    <MenuItem value={'o10'}>Undetermined</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </div>
                </Drawer>
            </div>

            //     </ExpansionPanelDetails>
            // </ExpansionPanel>
        );
    }
}

export default SKUFilter;