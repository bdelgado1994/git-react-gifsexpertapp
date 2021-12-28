import React from 'react';
import { shallow } from 'enzyme';
import GifsGridItem from '../../Components/GifsGridItem';

describe('Prueba Unitaria del componente GifsGridItem', () => {
    const titulo = 'Un titulo';
    const url = 'localhost/prueba.jpg';
    const wrapper = shallow(<GifsGridItem
        title={titulo}
        url={url}
    />)
    test('Prueba del componente', () => {

        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de Tener Un parrafo con el title', () => {
        const textoTitulo = wrapper.find('p')
        expect(textoTitulo.text().trim()).toBe(titulo);
    })
    test('debe de tner la imagen igual url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log(img.prop('src'))
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(titulo);
    });
    test('el div debe de tener la clase animate__bounce', () => {
        const div = wrapper.find('div');

        expect(div.prop('className').includes('animate__bounce')).toBe(true)
    })


})
