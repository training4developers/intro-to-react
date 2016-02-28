"use strict";

const
	React = require("react"),
	WidgetView = module.exports = class extends React.Component {

		constructor(props) {
			super(props);
			this._onEdit = this._onEdit.bind(this);
			this._onReturnToList = this._onReturnToList.bind(this);
		}

		_onEdit() {
			this.props.editWidget(this.props.widget.id);
		}

		_onReturnToList() {
			this.props.returnToList();
		}

		render() {
			return <section>
				<h2>View Widget</h2>
				<div>Name: {this.props.widget.name}</div>
				<div>Description: {this.props.widget.description}</div>
				<div>Color: {this.props.widget.color}</div>
				<div>Size: {this.props.widget.size}</div>
				<div>Quantity: {this.props.widget.quantity}</div>
				<div>
					<button type="button" className="btn btn-primary" onClick={this._onEdit}>Edit</button>
					<button type="button" className="btn btn-default" onClick={this._onReturnToList}>Return to List</button>
				</div>
			</section>;
		}
	};

WidgetView.propTypes = {
	widget: React.PropTypes.object
};
