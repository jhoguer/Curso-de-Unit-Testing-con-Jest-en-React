import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

const footer = mount(<Footer />);

describe('<Footer />', () => {
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe()