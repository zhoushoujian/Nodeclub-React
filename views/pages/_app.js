import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import _ from 'lodash';
import axios from 'axios'
import Header from "../layouts/header"
import Footer from "../layouts/footer"
import createStore from '../store';

const isServer = typeof window === 'undefined';
if (isServer) {
    // not print in back end, such as in vscode
    console.log = () => {};
}

if (!global.window) global.window = global;
// put helpful tools here
window._ = _;
window.axios = axios;

const REDUX_STORE = 'REDUX_STORE';

function getOrCreateStore(initialState) {
    if (isServer) {
        return createStore(initialState);
    }
    // Create store if unavailable on the client and set it on the window object
    if (!window[REDUX_STORE]) {
        window[REDUX_STORE] = createStore(initialState);
    }
    return window[REDUX_STORE];
}

class MyApp extends App {

    static async getInitialProps(appContext) {
        const appProps = await App.getInitialProps(appContext);
        return { ...appProps };
    }

    constructor(props) {
        super(props);
				const { data = {}, locals={} } = props.pageProps;
				console.log("props.pageProps", props.pageProps)
        this.store = getOrCreateStore({
						data,
						locals
				})
				window.$getState = this.store.getState
				window.$dispatch = this.store.dispatch
    }

    componentDidCatch(e, info) {
        // log error on console with info and error
        console.error("_app.js componentDidCatch e", e, 'info', info);
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Provider store={this.store}>
                <Header {...pageProps} />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        );
    }
}

export default MyApp;
