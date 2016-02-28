"use strict";

const
	React = require("react"),
	Footer = module.exports = class extends React.Component {

		constructor(props) {
			super(props);
		}

		render() {
			return <footer>
					Created for these <a href={this.props.ownerUrl}>{this.props.ownerLabel}</a>.
					Distributed under the <a href={this.props.licenseUrl}>{this.props.licenseLabel}</a>.
				</footer>;
		}

	};

Footer.defaultProps = {
	ownerUrl: "http://www.sitepoint.com/author/ericgreene/",
	ownerLabel: "SitePoint React Blog Posts",
	licenseUrl: "https://opensource.org/licenses/MIT",
	licenseLabel: "MIT License"
};
