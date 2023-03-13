import React from 'react';
import { render, cleanup, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import FetchComponent from './fetch';
import axiosMock from 'axios';
afterEach(cleanup);
it('renders data', async () => {
    axiosMock.get.mockResolvedValue({ data: "hello" })
    const url = '/react.com';
    render(<FetchComponent url={url} />);
    expect(screen.getByTestId("loading")).toHaveTextContent('...loading');
    const resolvedSpan = await waitFor(() => screen.findByTestId('resolved'));
    expect(resolvedSpan).toHaveTextContent("hello");
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);

})