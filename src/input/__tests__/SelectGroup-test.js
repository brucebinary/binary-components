import React from 'react';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';
import SelectGroup from '../SelectGroup';

describe('<SelectGroup />', () => {
    it('renders with no properties', () => {
        const wrapper = shallow(<SelectGroup />);
        expect(wrapper.type()).toEqual('fieldset');
    });

    it('passes className to fieldset', () => {
        const wrapper = shallow(<SelectGroup className="test-class" />);
        expect(wrapper.props().className).toEqual('test-class');
    });

    it('passes id to select', () => {
        const wrapper = render(
            <IntlProvider locale="en">
                <SelectGroup id="test-id" />
            </IntlProvider>
        );
        expect(wrapper.find('#test-id').length).toEqual(1);
    });

    it('can render options', () => {
        const options = [{ value: 'option1' }, { value: 'option2' }];
        const wrapper = render(
            <IntlProvider locale="en">
                <SelectGroup options={options} />
            </IntlProvider>
        );
        expect(wrapper.find('option').length).toEqual(2);
    });
});
