import React from 'react'
import Clicker from './clicker'
import { cleanup, fireEvent, render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
afterEach(cleanup)
//we must use useFakeTimers to run jest.advanceTimersByTime
jest.useFakeTimers()
describe('<Clicker />', () => {
    it('renders correctly', () => {
        render(<Clicker />)
        expect(screen.getByTestId('count')).toHaveTextContent('0')
    })
    it('increament', () => {
        render(<Clicker />)
        fireEvent.click(screen.getByText('Up'))
        expect(screen.getByTestId('count')).toHaveTextContent('1')
    })
    it('decreament', async () => {
        render(<Clicker />)
        fireEvent.click(screen.getByText('Down'))
        act(() => jest.advanceTimersByTime(550))
        expect(screen.getByTestId('count').textContent).toBe('-1')
    })
})

