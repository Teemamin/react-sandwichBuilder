import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';
// import Auxi from '../Auxi';

const withErrorHandler = (WrappedComponent, axios) => {
    const WithErrorHandler = props => {
      const [error, setError] = useState(null);
      const requestInterceptor = axios.interceptors.request.use(
        req => {
          setError(null);
          return req;
        }
      );
      const responseInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          setError(error);
          console.log('WithErrorHandler: ', error);
          return Promise.reject(error);
        }
      );
      useEffect(
        () => {
          return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
          };
        },
        [requestInterceptor, responseInterceptor]
      );
      return <>
        <Modal 
          show={error !== null}
          clicked={() => setError(null)}
        >
          {error !== null ? error.message : null}
        </Modal>
        <WrappedComponent {...props}/>
      </>
    };
    return WithErrorHandler;
  };
export default withErrorHandler;
