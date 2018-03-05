/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Enzyme, shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BackboneTable from './BackboneTable';

configure({ adapter: new Adapter() });

describe('set up', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BackboneTable />, div);
  });


  it('tests jest is there or not', ()=>{
    let cb = jest.fn();
        cb.mockReturnValueOnce(true)
    let ans = cb("My val")
    expect(ans).toBeTruthy();
  })  
})

describe('comparison', () => {
    it('should match the snapshot data 001', () => {
      const component = renderer.create(<BackboneTable></BackboneTable>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('should match the snapshot data 002', () => {
      const component = renderer.create(<BackboneTable></BackboneTable>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });  

})
    