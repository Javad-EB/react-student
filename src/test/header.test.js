import React from 'react'
import Header from './header'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { isDisabled } from '@testing-library/user-event/dist/utils'

it('rendersnapshot <Header />', () => {
    const { asFragment } = render(<Header text="hello" />)
    // expect(asFragment()).toMatchSnapshot()
})

it('render', () => {
    /*     const utils = render(<Header text="hello" />)
        expect(utils.getByTestId('h1Tag')).toHaveTextContent("hello") */
    render(<Header text="hello" />)
    expect(screen.getByTestId('h1Tag')).toHaveTextContent("hello")
    expect(screen.getByText('hello')).toHaveClass('h1-class')
})

it('render button', () => {
    render(<Header text="hello" />)
    expect(screen.getByTestId('ok-button')).toHaveAttribute('disabled')
    expect(screen.getByTestId('ok-button')).toHaveAttribute('type','submit')
})