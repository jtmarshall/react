//this would come from db
var sizeOptions = [{
    'label': 'Small',
    'id': 'sm'
  }, {
    'label': 'Large',
    'id': 'lg'
  }]
  var crustOptions = [{
    'label': 'Garlic & Herbs',
    'id': 'gr'
  }, {
    'label': 'Cheese',
    'id': 'hr'
  }]
  
  //would be a file in the <Table/> class?
  class TableRow extends React.Component{
    constructor(props){
      super(props);
      this.state={
        showDescription:false
      }
    }
    render(){
      return(
            <div style={{cursor:'pointer',padding:5,border:'1px solid #f9f9f9', background:this.isOdd(this.props.keyYo) ? 'white' :'#f9f9f9', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'flex-start', alignContent: 'stretch', alignItems: 'stretch'}}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', alignItems: 'stretch', height: 30}}>
            <div style={{ flex: 1, display: 'flex', margin: '0 auto', height: 30, alignItems: 'center'}}>{this.props.orderObj.size}</div>
            <div style={{ flex: 1, display: 'flex', margin: '0 auto', height: 30, alignItems: 'center'}}>{this.props.orderObj.crust}</div>
            <div style={{ flex: '0 0 100px', display: 'flex'}}><button type="button" className="btn btn-warning"  onClick={this._handleRowExpand.bind(this)} style={{width: '100%', height: 30, borderRadius: 0, cursor: 'pointer'}}>{this.state.showDescription ?"Collapse" : "Expand"}</button></div>
          </div>
          {this.state.showDescription ? <div style={{height: 50,background:this.isOdd(this.props.keyYo) ? 'white' :'#f9f9f9'}}>Item Description</div>: null}
        </div>)
    }
    isOdd(num) {
      return num % 2;
    }
    _handleRowExpand(){
      this.setState({
        showDescription:!this.state.showDescription
      })
    }
  }
  class MyOrders extends React.Component {
    constructor(props){
      super(props)
    }
    render() {
      var toReturnHeaders = (  <div style={{padding:5,display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'flex-start', alignContent: 'stretch', alignItems: 'stretch'}}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', alignItems: 'stretch', height: 30}}>
            <div style={{background: '#f9f9f9', flex: 1, display: 'flex', margin: '0 auto', height: 30, alignItems: 'center'}}>SIZE</div>
            <div style={{background: '#f9f9f9', flex: 1, display: 'flex', margin: '0 auto', height: 30, alignItems: 'center'}}>CRUST</div>
                    <div style={{background: '#f9f9f9', flex: '0 0 100px', display: 'flex', margin: '0 auto', height: 30, alignItems: 'center'}}>Action</div>
  
          </div>
        </div>)
      var toReturn = [];
      if(this.props.orders){
        this.props.orders.map((orderObj, keyYo) => {
         toReturn.push(<TableRow keyYo={keyYo} key={keyYo} orderObj={orderObj} />)
        })
      }
      return (
        <div>
          <h3 style={{margin:0}}>My Orders</h3>
          {toReturnHeaders}
          {toReturn}
        </div>
      )
    }
  }
  class ButtonBar extends React.Component {
    render() {
      return (
        <div style={{width:500, margin:'auto'}}>
          <div><h4>{this.props.title}</h4></div>
                <div className="btn-group" style={{display:'flex'}}>
                  {this.props.children}
          </div>
        </div>
      )
    }
  }
  class ProfileInformation extends React.Component {
    render() {
      return (
        <div><h5> My Information</h5>
          <label>Name : Robert Khayat <i className="fa fa-pencil"></i></label>
        </div>
      )
    }
  }
  
  class PictureUpload extends React.Component {
    render() {
      return (
        <div style={{marginRight:20,display:'flex',flexDirection:'column',alignItems:'center'}}><Circle fontSize="7vw" heightInPx="200" widthInPx="200" userName={this.props.userName}/><a href="#" onClick={this.props.handleProfileUploadModal} style={{fontSize:'1em',cursor:'pointer'}}>Change</a></div>
      )
    }
  }
  class Circle extends React.Component {
    constructor(props){
      super(props)
      
    }
    render() {
      var toReturn;
      if(this.props.userImageUrl){
        toReturn = (
                  <div style={{color:'white',margin:'auto'}}><img src={this.props.userImageUrl}/></div>
        )
      }else{
        toReturn = (
                  <div style={{color:'white',margin:'auto',fontSize:this.props.fontSize ? this.props.fontSize : '2vw'}}>{this.props.userName[0][0] + this.props.userName[1][0]}</div>
        )
      }
      //console.log(this.props.userName, "this.props.userName")
      return (
        <div style={{background:!this.props.userImageUrl ? '#2c3e50' : 'transparent', height:this.props.heightInPx ? this.props.heightInPx : 50,width:this.props.widthInPx ? this.props.widthInPx : 50 ,borderRadius:'50%',display:'flex', alignItems:'center'}}>
          {toReturn}
        </div>
      )
    }
  }
  
  class SideNav extends React.Component {
    constructor(props) {
      super(props)
    }
  
    getSideBar() {
      return (<div style={{width:'30%'}}> 
          <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
              <li onClick={this.props.getAQuoteNavTriggered}  style={{background:!this.props.searchTriggered && !this.props.showProfileView ? '#2c3e50' : 'white'}} className="sidebar-brand">
                <a onClick={this.props.getAQuoteNavTriggered}  style={{height:'100%',textAlign:'center', color:!this.props.searchTriggered && !this.props.showProfileView ? 'white'  : '#999999' }} href="#">
                  Get A Quote
                </a>
              </li>
              <li onClick={this.props.myOrderedNavTriggered} style={{background:this.props.searchTriggered && !this.props.showProfileView ? '#2c3e50' : 'white'}} className="sidebar-brand">
                <a  onClick={this.props.myOrderedNavTriggered}  style={{height:'100%',textAlign:'center', color:this.props.searchTriggered  && !this.props.showProfileView? 'white'  : '#999999' }} href="#">
                  My Orders
                </a>
              </li>
            </ul>
          </div>
        </div>)
    }
    render() {
      return (
  
        <div style={{overflow:''}} id="wrapper">
          {this.getSideBar()}
        </div>
      );
    }
  }
  class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showDropdown: false
      }
    }
    _handleClickProfileDropdownToggle() {
      this.setState({
        showDropdown: !this.state.showDropdown
      })
    }
    handleOnClickProfile() {
      this.setState({
        showProfileModal: true,
        inputUserSearch: null
      })
    }
    _handleInputChange() {
      //Get input value
      var searchInput = this.refs.searchInput.getDOMNode().value.trim()
        //var searchInput = ReactDOM.findDOMNode(this.refs.searchInput).value.trim()
      this.props.searchInputChanged(searchInput)
      this.setState({
        searchInput: searchInput
          //searchInput
      })
    }
    _handleClickProfileDropdownLeave() {
      this.setState({
        showDropdown: false
      })
    }
    _handleClickProfileDropdownEnter() {
      this.setState({
        showDropdown: true
      })
    }
    render() {
      return (<div style={{overflow:'visible'}}>
           <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div style={{display:'flex'}}>
              <form className="navbar-form navbar-left" style={{display:'flex',alignCenter:'center'}} role="search">
                <div style={{display:'flex',flexDirection:'row'}} className="form-group">
                  <h5 style={{margin:0,display:'flex',alignItems:'center', paddingRight:10}}>Search&nbsp;<i className="fa fa-2x fa-arrow-right"></i></h5>&nbsp; <input ref="searchInput" onChange={this._handleInputChange.bind(this)} style={{width:'500',display: 'flex', flex: 1, alignItems: 'center', alignContent: 'center', margin: 'auto'}} type="text" className="form-control" placeholder="" />
                </div>
              </form>
              <ul style={{marginLeft:'auto'}} className="nav navbar-nav navbar-right">
                <li  onMouseLeave={this._handleClickProfileDropdownLeave.bind(this)} onMouseEnter={this._handleClickProfileDropdownEnter.bind(this)} onClick={this._handleClickProfileDropdownToggle.bind(this)} style={{borderLeft:'1px solid #2c3e50'}}><a style={{ display:'flex',alignItems:'center',alignContent:'center',fontSize:16}} href="#"><Circle fontSize="2vw" userName={this.props.userName} userImageUrl={this.props.userImageUrl} />&nbsp;Welcome, Robert
               </a>{this.state.showDropdown
                    ?
                     <DropDown onClickProfile={this.props.onClickProfile}/>
                    :
                      null
                   }</li> 
              </ul>
            </div>
          </div>
        </nav>
      </div>);
    }
  }
  class DropDown extends React.Component {
    render() {
      return (
        <div className="dropdown open">
          <ul className="dropdown-menu" style={{width:'100%'}}>
            <li><a onClick={this.props.onClickProfile} href="#">Profile</a></li>
          </ul>
        </div>
      )
    }
  }
  class MainContent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // orderObj: {
        //   orderSize: null,
        //   orderCrust: null
        // },
        sizeSelected: false,
        myOrders:[{'size':'testsize','crust':'testcrust'}]
      }
    }
    _handleAddOrder() {
      var currentOrders = this.state.myOrders;
      var sessionOrder = {'size':this.state.orderSize,'crust':this.state.orderCrust}
      currentOrders.push(sessionOrder)
          this.triggerNotification()
  
      this.setState({
        currentOrders,
        crustSelected:null,
        sizeSelected:null
      })
      //getorder
      //send order to main content
    }
    triggerNotification(){
      setTimeout(this.clearNotification.bind(this), 3000);
     this.setState({
       showNotification:true
     })
    }
    clearNotification(){
       this.setState({
       showNotification:false
     })
    }
    
    sizeSelected(newSize) {
      this.setState({
        sizeSelected: true,
        orderSize: newSize.label,
        orderComplete: true
      })
    }

    crustSelected(newCrust) {
      this.setState({
        crustSelected: true,
        orderCrust: newCrust.label
      })
    }

    getMyOrders() {
      var userInput = this.props.userInput
      var myOrders = this.state.myOrders
      var myOrdersAfterFilter;
     if(userInput && userInput.length > 0){
        myOrders = myOrders.filter((orderObj) =>{

        return(orderObj['size'].includes(userInput) || orderObj['crust'].includes(userInput) )
      })
     }

      var myOrdersComponent = (<MyOrders orders={myOrders} />)
      if(!this.props.userInput){
        return (
          <div><div>Type To Search</div>{myOrdersComponent} </div>)
      }else{
        return (
        <div><div>My Orders for '{this.props.userInput}'</div>{myOrdersComponent}</div>)
      }
      
    }

    getBars() {
      var toReturnSize = [],
        toReturnCrust = [];
  
      sizeOptions.map((sizeObj, iKey) => {
        toReturnSize.push(<button iKey={iKey} onClick={this.sizeSelected.bind(this, sizeObj)} type="button" style={{flex:'1 1 50%', height:100,width:200}} className="btn btn-default">{sizeObj.label}</button>)
      })
      crustOptions.map((crustObj, iKeyTwo) => {
        toReturnCrust.push(<button key={iKeyTwo} onClick={this.crustSelected.bind(this, crustObj)} type="button" style={{flex:'1 1 50%', height:100,width:200}} className="btn btn-default">{crustObj.label}</button>)
      })
      return (
        <div style={{display:'flex',flexDirection:'column',margin:'auto',alignItems:'center',alignContent:'center'}}>
          {
            this.state.showNotification
            ?
              <div style={{position:'absolute',bottom:10,right:10}}><i style={{color:'#BADA55'}} className="fa fa-5x fa-smile-o"></i></div>
              :
            null
            
          }
          <div>
          {!this.state.sizeSelected
          ?
            <div  style={{margin:5}}>
              <ButtonBar  title={"Select Size"} options={sizeOptions}>{toReturnSize}</ButtonBar>
            </div>
          :
          null
          }
         {
            this.state.sizeSelected && !this.state.crustSelected
            ?
              <div  style={{margin:5}}>
                <ButtonBar title={"Select Crust"} options={crustOptions}>{toReturnCrust}</ButtonBar>
              </div>
              :
            null
          }
          {
            this.state.orderComplete && this.state.sizeSelected && this.state.crustSelected
            ?
            <div>
                <div style={{margin:5}}><h4>Summary: </h4><h4>{this.state.orderSize} Pizza </h4> <h4>{this.state.orderCrust} Crust </h4></div>
                <span style={{margin:'5 auto'}}>
                  <button onClick={this._handleAddOrder.bind(this)} className="btn btn-success">Submit</button>
                  &nbsp;
                  <button className="btn btn-danger">Cancel</button>
                </span>
            </div>
            :
            null
          }
          </div>  
        </div>
      )
    }

  handleProfileUploadModal(){
      this.props.handleOpenModal()  
  }

  handleCloseModal(){
      this.props.handleCloseModal()
    }
    
    getProfile() {
      return (
        <div style={{display:'flex',flexDirection:'column',marginTop:0,marginLeft:20}}>
          <div style={{marginBottom:10}}><div style={{width:'100%'}}><h3 style={{margin:0}}>Profile</h3></div></div>
         {
            //DEV MODE
           this.props.showProfileModal
            ?
               
             <div><div style={{display:'flex',alignContent:'center',flexDirection:'column',textAlign:'center'}}><h3 style={{marginBottom:10,marginTop:0}}>Upload Image</h3><img style={{margin:'auto'}} src="http://placehold.it/150x150"/></div><hr/><div> <button type="button" style={{display:'flex',alignItems:'center',margin:'auto'}}  className="btn btn-action">Upload</button></div></div>
              :
            <div>
             
              <div style={{display:'flex'}}><PictureUpload handleProfileUploadModal={this.handleProfileUploadModal.bind(this)} userName={this.props.userName}/>               
                <ProfileInformation/>
              </div>
            </div>
          }
        </div>)
    }

    render() {
      var toReturn;
      //DEV MODE
      if (!this.props.searchTriggered) {
        toReturn = (<div style={{overflowY:'auto'}}>
                      {
              //DEV MODE
                       !this.props.showProfileView
                      ?
                       this.getBars()    
                      :
                       this.getProfile()
                      }
                    </div>)
      } else {
        toReturn = (<div style={{overflowY:'auto'}}>
                    {
              
                      !this.props.showProfileModal
                     ?
                      this.getMyOrders()    
                     :  
                      this.getProfile()
                    }
                    </div>)
      }
      return (
        <div>
        <div>{toReturn}</div>
    </div>)
    }
  }

  class Application extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          hasUserImage:false,
          userImageUrl:null,
          showProfileModal: false,
          searchTriggered: false //DEV MODE
        }
      }

      onClickProfile() {
        //click from profile drop down => set state to profile view
        this.setState({
          inputUserSearch: null,
          showProfileView: true,
          //searchTriggered:false
        })
      }

      onSearchInputChange(userInput) {
        //triggered rom NAV child
        this.setState({
           searchTriggered: true,
            showProfileModal: false,
            showProfileView:false,
            userInput
        })
      }

      handleMyOrderedNavTriggered() {
        this.setState({
          searchTriggered: true,
          showProfileView: false,
          showProfileModal:false
        })
      }

      handleGetAQuoteNavTriggered() {
        this.setState({
          searchTriggered: false,
          showProfileView: false,
          showProfileModal:false
        })
      }
      
      handleCloseModal(){
          this.setState({
              showProfileModal:false
          })
      }

      handleOpenModal(){
          this.setState({
              showProfileModal:true
            })
        }

    render() {
        return (<div>
        <Nav userImageUrl={this.state.hasUserImage ? this.state.userImageUrl : null} userName={this.props.userName} searchInputChanged={this.onSearchInputChange.bind(this)} onClickProfile={this.onClickProfile.bind(this)}/>
        <SideNav showProfileView={this.state.showProfileView} getAQuoteNavTriggered={this.handleGetAQuoteNavTriggered.bind(this)} myOrderedNavTriggered={this.handleMyOrderedNavTriggered.bind(this)} searchTriggered={this.state.searchTriggered}/>
          <div style={{marginLeft:260}}>
        <MainContent userInput={this.state.userInput} showProfileView={this.state.showProfileView} handleCloseModal={this.handleCloseModal.bind(this)} handleOpenModal={this.handleOpenModal.bind(this)} userName={this.props.userName} searchTriggered={this.state.searchTriggered} showProfileModal={this.state.showProfileModal}/>
          </div>
      </div>)
      }
    }
  
  
  Circle.propTypes = { heightInPx: React.PropTypes.number,
                      widthInPx: React.PropTypes.number,
                      userName: React.PropTypes.array.required,
                      userImageUrl: React.PropTypes.string.required};
  //Warning: Failed propType: Required prop `heightInPx` was not specified in `Circle`. Check the render method of `Nav`.
  
  
    /*
     * Render the above component into the div#app
     */
  React.render(<Application  userName={['testy','testerson']} />, document.getElementById('app'));