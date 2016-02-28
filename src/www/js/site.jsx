"use strict";

const
	React = require("react"),
	ReactDOM = require("react-dom"),
	Header = require("./components/header"),
	WidgetsTool = require("./components/widgets-tool"),
	Footer = require("./components/footer");

ReactDOM.render(<div>
		<Header />
		<WidgetsTool />
		<Footer />
	</div>, document.querySelector("body > div:first-child"));
