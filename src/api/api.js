//Dev API path to mock JSON
const mockPath = "/mocks"

//Production API path
const apiPath = ""


const headers = {
  'Accept': 'application/json',
  'cache-control': 'no-cache',
}

const isDevEnv = (window.location.hostname.indexOf("localhost") === 0
                  || window.location.hostname.includes("github.io"))

let fullAPIpath = {}

if(isDevEnv){
  fullAPIpath = {
    backbone : `${mockPath}/backbone.json`,
    customer : `${mockPath}/customer.json`,
    growth : `${mockPath}/growth.json`,
    peering : `${mockPath}/peering.json`,
    retail : `${mockPath}/retail.json`,
    wholesale : `${mockPath}/wholesale.json`
  }
}else{
  fullAPIpath = {
    backbone : "",
    customer : "",
    growth : "",
    peering : "",
    retail : "",
    wholesale : ""
  }  
}           


export const getCustomerRankList = () =>
  fetch(fullAPIpath.customer, {headers})
    .then(res => res.json)
    .then(data => data.books)
    .catch(error => error)    
    

export const getBackboneRankList = () =>
    fetch(fullAPIpath.backbone, {
      cache: 'no-cache', 
      headers,
    })
    .then(res => res.json())
    .then(data => data.list)
    .catch(error => error)  

export const getCustomerRankList1 = () =>
  fetch(fullAPIpath.customer, headers)
  .then(res => res.json())
  .then(data => data.list)
  .catch(error => error)  
  
export const getGrowthRankList = () =>
  fetch(fullAPIpath.growth, { headers })
    .then(res => res.json())
    .then(data => data.list)
    .catch(error => error)  
    
export const getPeeringRankList = () =>
  fetch(fullAPIpath.peering, { headers })
    .then(res => res.json())
    .then(data => data.list)
    .catch(error => error)  
    
export const getRetailRankList = () =>
  fetch(fullAPIpath.retail, { headers })
    .then(res => res.json())
    .then(data => data.list)
    .catch(error => error)  
    
export const getWholesaleRankList = () =>
  fetch(fullAPIpath.wholesale, { headers })
    .then(res => res.json())
    .then(data => data.list)
    .catch(error => error)              
    
