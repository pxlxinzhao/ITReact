import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './bootstrap.min.css';

import reducer from './reducer'
import App from './App';
import {createStore} from 'redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
