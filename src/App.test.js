import React from 'react';
import ReactDOM from 'react-dom';
import App, {Counter} from './App';
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
configure({ adapter: new Adapter() });        


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test----------
const functionSum = (a,b) => a + b;
it('test', ()=> {
  expect(functionSum(1,2)).toBe(3)
})
//--------------

// exist : to check class(btn-primary) is exist or not
it('render an h1 element', () => {
  const wrapper = shallow(<Counter/>);
  console.log(wrapper.debug())
  expect(wrapper.exists('#reset')).toEqual(true);
});

// find: to check value of class(btn-primary) = (Reset) or not
it(('render a number when app start'), () => {
  const wrapper = shallow(<Counter/>);
  expect(wrapper.find('#reset').text()).toEqual('Reset')
})

// function to test: when ('click') button, value of (.count) = 1 or not
it('increment count when click',()=>{
  const wrapper = shallow(<Counter/>); 
  const button = wrapper.find('#increment'); 
  button.simulate('click'); // simulate an event 
  wrapper.update();
  expect(wrapper.find('.count').text()).toEqual('1');
})