import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './Counter'
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { incrementCounter } from './actions';
import { counterReducer } from './reducers'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() }); 

describe('<Counter />', () => {
    it('render an h1 element', () => {
        const wrapper = shallow(<Counter/>);
        console.log(wrapper.debug())
        expect(wrapper.exists('#reset')).toEqual(true);
      });
});

describe('Counter redux pieces', () => {
    let store;
  
    beforeEach(() => {
      const mockStore = configureMockStore();
      store = mockStore({});
    });
  
    it('sends an increment counter action', () => {
      store.dispatch(incrementCounter());
      expect(store.getActions()).toEqual(
        [
          { type: 'INCREMENT_COUNTER' },
        ]);
    })
  });

  it('applies the counter reducer for increment correctly', () => {
    // given
    const beforeState = {count: 0};
    const action = {type: 'INCREMENT_COUNTER'};
    // when
    const afterState = counterReducer(beforeState, action);
    // then
    expect(afterState).toEqual({count: 1});
  });
