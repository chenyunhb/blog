import React from 'react';
import {Link} from 'react-router-dom';
import '../../../css/home/homeheader.css';

const HomeHeader = () => {
	return (<div className="home-header">
				<div className="home-header-title"><Link to="/">陈云的个人博客</Link></div>
				<div className="home-header-subtitle"><p>chenyun personal website</p></div>
				<div className="home-header-nav">
			<div className="home-header-nav-item"><Link to='/'>home</Link></div>
			<div className="home-header-nav-item"><Link to='/blog/index'>blog</Link></div>
			<div className="home-header-nav-item"><Link to='/about'>about</Link></div>
				</div>
			</div>)
}

export default HomeHeader;