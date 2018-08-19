import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import blog from '../reducers/index';

const store=createStore(blog,applyMiddleware(thunk));
export default store;