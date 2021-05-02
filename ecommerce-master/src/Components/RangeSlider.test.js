import React from 'react';
import ReactDom from 'react-dom';
import RangeSlider from './RangeSlider'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<RangeSlider />, div)
})