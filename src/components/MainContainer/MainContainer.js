import React, { Component } from 'react';
import './MainContainer.css';
import '../../styles/dist/css/bootstrap.min.css';

import BackboneTable from '../BackboneTable/BackboneTable'
import CustomerTable from '../CustomerTable/CustomerTable'
import GrowthTable from '../GrowthTable/GrowthTable'
import PeeringTable from '../PeeringTable/PeeringTable'
import RetailTable from '../RetailTable/RetailTable'
import WholesaleTable from '../WholesaleTable/WholesaleTable'


class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
        {/*######  Page Header  ######*/}
        <header className="MainContainer-header">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">ISP Ranking</a>
              </div>
              <ul className="nav navbar-nav"></ul>
            </div>
          </nav>        
        </header>

        {/*######  Page Container  ######*/}        
        <div className="container">
          <div className="row">

            {/*######  Left Column  ######*/}
            <div className="col-sm-6">
              <CustomerTable/>
              <RetailTable/>
              <BackboneTable/>
            </div>

            {/*######  Right Column  ######*/}            
            <div className="col-sm-6">
              <GrowthTable/>      
              <WholesaleTable/>   
              <PeeringTable/>   
            </div>
          </div>        
        </div>
      </div>
    );
  }
}

export default MainContainer;
