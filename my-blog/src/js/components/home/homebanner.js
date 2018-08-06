import React from 'react';
import '../../../css/home/homebanner.css';
import touxiang from '../../../img/touxiang.jpg';

export default class HomeBanner extends React.Component {
	render() {
		return (
			<div className="home-banner">
				<div className="home-banner-me">
					<div className="home-banner-img">
						<img src={touxiang} alt="头像" />
					</div>
					<div className="home-banner-desc">
						<h1>陈云</h1>
						<p>努力学习，用心工作</p>
						<div className="home-banner-link">
							<div className="link">
								<a target="_blank" rel="noopener noreferrer" href="https://github.com/chenyunhb">Github</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}