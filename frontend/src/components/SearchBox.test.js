import expect from 'expect';
import React from 'react';
import SearchBox from './SearchBox';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });


describe('Search Box', () => {

  it('contains 1 input ', () => {
    const wrapper = shallow(<SearchBox />);
    
    expect(wrapper.find('input').length).toBe(1);
  });

  it('contains 1 div ', () => {
    const wrapper = shallow(<SearchBox />);
    
    expect(wrapper.find('div').length).toBe(1);
  });


});