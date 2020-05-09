'use strict';

const NEXT = require('next');

const client = NEXT({
    dev: process.env.NODE_ENV !== 'production',
    dir: './views'
});

module.exports = client;
