import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/font-awesome.min.css';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
