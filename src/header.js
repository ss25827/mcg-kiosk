import React, {Component} from 'react';
import logo from './assets/img/mcg.svg';

export default class header extends Component {

	render() {

		return (
          <header>
                <img id="mcg-logo" src={logo} />
              <span>&deg;86F Bradenton, FL</span>
          
          </header>
		)
	}
	}