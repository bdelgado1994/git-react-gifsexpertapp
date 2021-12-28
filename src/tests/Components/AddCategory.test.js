import React from 'react';
import { shallow } from 'enzyme'
import AddCategory from '../../Components/AddCategory'
describe('Prueba Unitaria de AddCategory', () => {
    const setCategory = () => { };
    const wrapper = shallow(<AddCategory setCategories={setCategory} />);
    test('Prueba del componente', () => {

        expect(wrapper).toMatchSnapshot();
    })

})
