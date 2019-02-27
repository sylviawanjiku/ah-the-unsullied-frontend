import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import * as types from '../actionTypes';
import * as actions from '../loginActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login User', () => {
  beforeEach(function() {
    moxios.install();
  });

  const store = mockStore();

  moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 201,
        response: mockRes
      });
    });

  afterEach(function() {
    moxios.uninstall();
  });

  it('it should dispatch loginUser', () => {
    const user = {
      email: 'email@gmail.com',
      password: 'password'
    };
    const expectedAction = [
      {
        type: types.SET_CURRENT_USER
      }
    ];
    

    store.dispatch(actions.loginUser(user)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  
});
