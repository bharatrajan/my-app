/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Enzyme, shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainContainer from './MainContainer';


describe('set up', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('tests jest is there or not', ()=>{
    let cb = jest.fn();
        cb.mockReturnValueOnce(true)
    let ans = cb("My val")
    expect(ans).toBeTruthy();
  })  

})
