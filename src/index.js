import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

var App = require('./app/components/App');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
registerServiceWorker();
