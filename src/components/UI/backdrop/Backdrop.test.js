import React from 'react'
import Backdrop from './Backdrop'
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });
describe('<Backdrop />', () => {
    it('renders null', () => {
        const wrapper = shallow(<Backdrop />)
        expect(wrapper.equals(null)).toEqual(true)
    })
    it('renders somthings', () => {
        const wrapper = shallow(<Backdrop />)
        wrapper.setProps({ show: true })
        expect(wrapper.find('.Backdrop').exists()).toEqual(true)
        // expect(wrapper.find('.Backdrop').hasClass('Backdrop')).toEqual(true)
    })
})