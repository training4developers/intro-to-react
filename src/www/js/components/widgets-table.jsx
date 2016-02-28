"use strict";

const
	React = require("react");

module.exports = class WidgetsTable extends React.Component {

	constructor(props) {
		super(props);

		this._onEditWidget = this._onEditWidget.bind(this);
		this._onViewWidget = this._onViewWidget.bind(this);
		this._onCreateWidget = this._onCreateWidget.bind(this);
	}

	_onEditWidget(e) {
		this.props.editWidget(this._parseWidgetId(e));
	}

	_onViewWidget(e) {
		this.props.viewWidget(this._parseWidgetId(e));
	}

	_onCreateWidget() {
		this.props.editWidget();
	}

	_parseWidgetId(e) {
		return parseInt(e.target.getAttribute("data-widget-id"), 10);
	}

	_capitalize(s) {
		s = String(s);
		return s.charAt(0).toUpperCase() + s.slice(1);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.widgets !== this.props.widgets;
	}

	render() {
		return <section>
			<h2>Widgets Tool</h2>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Name</th>
						<th>Color</th>
						<th>Size</th>
						<th>Quantity</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{this.props.widgets.map((widget) => {
						return (
							<tr key={widget.id}>
								<td>{widget.name}</td>
								<td className='center-text'>{this._capitalize(widget.color)}</td>
								<td className='center-text'>{this._capitalize(widget.size)}</td>
								<td className='center-text'>{widget.quantity}</td>
								<td className='center-text'>
									<button className="btn btn-link" data-widget-id={widget.id} onClick={this._onEditWidget}>Edit</button>
									<button className="btn btn-link" data-widget-id={widget.id} onClick={this._onViewWidget}>View</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<button className="btn btn-primary" onClick={this._onCreateWidget}>Create Widget</button>
		</section>;
	}

};
