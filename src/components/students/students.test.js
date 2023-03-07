import React from 'react'
import Students from './students'
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Student from './student/student'
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() });
const items = [
    { id: 5, name: 'Samaneh Sheybanivaziri', classNumber: 144, phoneNumber: 44443, email: '@ali.com' },
    { id: 6, name: 'Yasna', classNumber: 515, phoneNumber: 5178948974, email: 'Yasna@gmail.com' },
    { id: 6, name: 'Javad', classNumber: 111, phoneNumber: 3333, email: 'javad@gmail.net' },
    { id: 7, name: 'Reza', classNumber: 850, phoneNumber: 158787444444, email: 'reza@gmail.com' },
]

describe('<Students />', () => {
    it('renders number of student component', () => {
        const spy = sinon.spy()
        const wrapper = shallow(<Students studentsList={items} delete={spy} toggle={true} edited={spy} />)
        expect(wrapper.find(Student)).toHaveLength(items.length);
    })
})

