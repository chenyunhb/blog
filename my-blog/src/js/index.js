import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import {getAllBlog} from '../js/actions/action';
import '../css/index.css';
import App from './containers/App.js';

store.dispatch(getAllBlog());
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));