import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';
import actions from '../../actions';

describe('Reducers', () => {
  test('Retornar initial State', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('addToCArt Reducer', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [
        ProductMock,
      ],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
