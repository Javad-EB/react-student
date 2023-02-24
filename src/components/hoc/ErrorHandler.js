/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Modal from '../UI/Modal/Modal'

const ErrorHandler = (WrappedComponent, axios) => {
    const withHookErrorHandler = (props) => {
        const [show, setShow] = useState(false)
        const [error, setError] = useState(null)

        axios.interceptors.request.use(function (request) {
            // Do something before request is sent
            setShow(false)
            return request;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        axios.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            setShow(true)
            setError(error.message)
            return Promise.reject(error);
        });
        const errorConfirmHandler = () => {
            setShow(false)
        }
        return (
            <React.Fragment>
                <Modal show={show} backDropClosed={errorConfirmHandler}>
                    {error}
                </Modal>
                < WrappedComponent {...props} />
            </React.Fragment>
        )
    }
    return withHookErrorHandler
}

export default ErrorHandler