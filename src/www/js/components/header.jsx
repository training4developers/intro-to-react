"use strict";

const
	React = require("react");

module.exports = class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="page-header">
				<h1>Widgets Demo App</h1>
			</header>
		);
	}

};
