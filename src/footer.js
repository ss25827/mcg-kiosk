import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavLink from "./nav_link";
export default class footer extends Component {
	render() {
   return (
    <footer>
    <NavLink to="/"><i className="fa fa-home"></i>Home</NavLink>
    <NavLink to="/earthday"><i className="fa fa-globe"></i>Earthday</NavLink>
    <NavLink to="/events"><i className="fa fa-calendar"></i>Events</NavLink>
    <NavLink to="/county"><i className="fa fa-bank"></i>County</NavLink>
    <NavLink to="/pledge"><i className="fa fa-certificate"></i>Pledge</NavLink>
    </footer>
    )
 }
}