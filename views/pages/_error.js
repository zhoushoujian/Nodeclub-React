/* eslint-disable react/jsx-filename-extension */
import React from 'react';

class Error extends React.Component {
    static getInitialProps({ res, err }) {
        if (res && res.statusCode) {
            return { statusCode: res.statusCode };
        }
        if (err && err.statusCode) {
            return { statusCode: err.statusCode };
        }
        return {};
    }

    render() {
        const { statusCode } = this.props;
        return (
            <p>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
        );
    }
}

export default Error;
