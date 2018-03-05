import React, { Component } from 'react';
import './PeeringTable.css';
import SingleRecord from '../SingleRecord/SingleRecord'
import {getPeeringRankList} from '../../api/api'

class PeeringTable extends Component {

  /**
  * @description - Set props to parent
  * @description - Binds "this" inside "errorHandler" & "successHandler"
  * @constructor
  * @param {object} props - attributes sent from parent
  * @returns none
  */  
  constructor(props) {
    super(props);
    this.errorHandler = this.errorHandler.bind(this);
    this.successHandler = this.successHandler.bind(this);
  }

  /**
  * @description: Lables used inside this component
  */    
  labels = {
    table : {
      header : {
        main : "IPv4 Peering Base Rankings",
        rank : "",
        label : "Provider",
        asn : "ASN",
        percentage: ""
      }
    }
  }

  /**
  * @description: Component state
  */   
  state = {}
  
  /**
  * @description Make get API call during post mount
  * @type : lifecycle
  * @returns none
  */  
  componentDidMount = () => {
    getPeeringRankList()
      .then(this.successHandler)
      .catch(this.errorHandler)
  }; 

  /**
  * @description - Takes rankList, validates and set to state
  * @handler
  * @param {object} rankList - response from API
  * @returns none
  */  
  successHandler = rankList => {
    if(Array.isArray(rankList) && rankList.length > 0){
      this.setState({ rankList : rankList })
    }else{
      this.setState({ apiError : rankList })
    }
  }

  /**
  * @description - Takes error and set to state
  * @handler
  * @param {object} error - error from API
  * @returns none
  */    
  errorHandler = error => {
    this.setState({ error : error })
  }    

  /**
  * @description: Template renderer
  * @param: None
  * @returns: None
  */  
  render() {
    const { rankList, apiError } = this.state;
    
    if(typeof apiError == 'undefined' && typeof rankList == 'undefined'){
      return (
        <div className="PeeringTable">
        </div>
      )
    }
    

    else if(typeof apiError != 'undefined'){
      return(
        <div className="PeeringTable">        
          <div className="error-message alert alert-danger">
            {`! Something went wrong. Please try again later for ${this.labels.table.header.main}`}
          </div>        
        </div>  
      )
    }


    else if(typeof rankList != 'undefined' && Array.isArray(rankList) && rankList.length>0){
      return(
        <div className="PeeringTable">                
          <div className="table-shell">
            <div className="table-title">{this.labels.table.header.main}</div>
            <div className="table">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th>{this.labels.table.header.label}</th>
                    <th>{this.labels.table.header.asn}</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    {rankList.map((record, index) => 
                        <SingleRecord key={index + record.rank} record={record}/>
                    )}
                </tbody>
              </table>          
            </div>
          </div>          
        </div>          
      )      
    }
    
    else{
      return (
        <div className="PeeringTable">
        </div>
      )
    }
  }
}

export default PeeringTable;
