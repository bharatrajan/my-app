/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Enzyme, shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SingleRecord from './SingleRecord';


describe('set up', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const record = {
        "percentage": 1000, 
        "label": "Savvis", 
        "change": 0, 
        "rank": 1, 
        "asn": 3561
      };
    ReactDOM.render(<SingleRecord record={record}></SingleRecord>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('tests jest is there or not', ()=>{
    let cb = jest.fn();
        cb.mockReturnValueOnce(true)
    let ans = cb("My val")
    expect(ans).toBeTruthy();
  })  

})

describe('snapshot comparison', () => {
    it('should match the snapshot data 001', () => {
        const record = {
            "percentage": 1000, 
            "label": "Savvis", 
            "change": 0, 
            "rank": 1, 
            "asn": 3561
          };
      const component = renderer.create(<SingleRecord record={record}></SingleRecord>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('should match the snapshot data 002', () => {
        const record =   {
            "percentage": 877, 
            "label": "nLayer Communications, Inc.", 
            "change": 0, 
            "rank": 2, 
            "asn": 4436
          };        
      const component = renderer.create(<SingleRecord record={record}></SingleRecord>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    }); 
})


describe('Progress bar check', () => {
    it('test market coverage for 1000', () => {
        const record = {
            "percentage": 1000, 
            "label": "Savvis", 
            "change": 0, 
            "rank": 1, 
            "asn": 3561
          };
      const component = shallow(<SingleRecord record={record}></SingleRecord>);    
      const progressBar = component.find('.progress-bar');
      expect(progressBar.style.width).toEqual("100");
    });

    it('test market coverage for 500', () => {
        const record = {
            "percentage": 500, 
            "label": "Savvis", 
            "change": 0, 
            "rank": 1, 
            "asn": 3561
          };
      const component = shallow(<SingleRecord record={record}></SingleRecord>);    
      const progressBar = component.find('.progress-bar');
      expect(progressBar.style.width).toEqual("50");
    });    
})

