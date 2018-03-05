import backboneRankList from '../mocks/backboneRankList';
import customerRankList from '../mocks/customerRankList';
import growthRankList from '../mocks/growthRankList';
import peeringRankList from '../mocks/peeringRankList';
import retailRankList from '../mocks/retailRankList';
import wholesaleRankList from '../mocks/wholesaleRankList';




//API path
const apiServer = "/api"

const headers = {
  'Accept': 'application/json',
  'cache-control': 'no-cache',
}

let isDevEnv = (window.location.host.indexOf('localhost') === 0)

let mockResponse = {
    backbone : backboneRankList,
    customer : customerRankList,
    growth : growthRankList,
    peering : peeringRankList,
    retail : retailRankList,
    wholesale : wholesaleRankList
  }

export const getRankList = (type) =>{
  if(isDevEnv){
    return new Promise((res) => {
      res(mockResponse[type])
    })
  }else{
    fetch(`${apiServer}/${type}`, { headers })
    .then(res => res.json())
    .then(data => data.books)
    .catch(error => error) 
  }
}    
