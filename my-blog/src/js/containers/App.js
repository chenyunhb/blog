import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import HomeHeader from '../components/home/homeheader';
import HomeFooter from '../components/home/homefooter';
import Home from '../containers/home';
import Blog from '../containers/blog';
//import About from '../containers/about';

export default class App extends React.Component{
	render(){
		return (
			<HashRouter>
				<div>
					<HomeHeader/>
					<div>
						<Route exact path="/" component={Home} />
					  <Route path="/blog" component={Blog} />
					</div>
					<HomeFooter/>
				</div>
			</HashRouter>
		);
	}
}
