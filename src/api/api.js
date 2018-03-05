import backboneRankList from "../mocks/backboneRankList";
import customerRankList from "../mocks/customerRankList";
import growthRankList from "../mocks/growthRankList";
import peeringRankList from "../mocks/peeringRankList";
import retailRankList from "../mocks/retailRankList";
import wholesaleRankList from "../mocks/wholesaleRankList";

//API path
const apiServer = "/api";

//Request headers
const headers = {
  Accept: "application/json",
  "cache-control": "no-cache"
};

//Dev enviroment deduction
export const isDevEnv = window.location.host.indexOf("localhost:3000") === 0;

//Response factory
let mockResponse = {
  backbone: backboneRankList,
  customer: customerRankList,
  growth: growthRankList,
  peering: peeringRankList,
  retail: retailRankList,
  wholesale: wholesaleRankList
};

//NON-AJAX way only for development
export const getRankList = type => {
  return new Promise(res => {
    res(mockResponse[type]);
  });
};

//fetch based API Calling
//Should be used in Production
//Can be used with a real API
export const fetchRankList = type => {
  fetch(`${apiServer}/${type}`, { headers })
    .then(res => res.json())
    .then(data => data.books)
    .catch(error => error);
};

//Simple XHR API calls
export const getRankListXHR = (type, successCB, failureCB) => {
  let url = `mocks/${type}.json`;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      try {
        let resp = JSON.parse(xhr.responseText);
        successCB(resp);
      } catch (err) {
        failureCB(err);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.send(null);
};
