import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Success extends Component {

	render() {

		return (

			<div className="page">

			<section>
			<h1>Thanks!</h1>
			<p>Earthday Network will email you with more details!</p>
			<hr />

			<Link to="/" className="btn color">Back Home <i className="fa fa-globe" aria-hidden="true"></i></Link>

			

			</section>

			</div>

			);
	}


	componentDidMount () {
		window.scrollTo(0, 0);
	};

}