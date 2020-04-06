import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Link from '../src/Components/Link/index';

describe('Link', () => {
    test('should render correctly', () => {
        const output = shallow(<Link title='mockTitle' url='mockUrl' />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    test('should handle the click event', () => {
        window.alert = jest.fn();
        const output = shallow(<Link title='mockTitle' url='mockUrl' />);
        output.simulate('click');
        expect(window.alert).toHaveBeenCalledWith('Кликнули по ссылке!');
    });

    it('should handle state changes', () => {
        const output = shallow(<Link title='mockTitle' url='mockUrl' />);

        expect(output.state().isstate).toEqual(false);
        output.simulate('click');
        expect(output.state().isstate).toEqual(true);
    });
});
