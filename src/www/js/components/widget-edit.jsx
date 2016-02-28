"use strict";

const
	objectAssign = require("object-assign"),
	React = require("react");

module.exports = class WidgetEdit extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			widget: objectAssign({
				color: "red",
				size: "tiny"
			}, this.props.widget)
		};

		this._onChange = this._onChange.bind(this);
		this._onSave = this._onSave.bind(this);
		this._onDelete = this._onDelete.bind(this);
		this._onReturnToList = this._onReturnToList.bind(this);
	}

	_onChange(e) {
		this.setState({
			widget: objectAssign(this.state.widget, {
				[e.target.name]: e.target.value
			})
		});
	}

	_onSave() {
		this.props.saveWidget(this.state.widget);
	}

	_onDelete() {
		if (confirm("Are you sure you want to delete this widget?")) {
			this.props.deleteWidget(this.state.widget.id);
		}
	}

	_onReturnToList() {
		this.props.returnToList();
	}

	render() {
		return <section><form>
			<h2>Edit Widget</h2>
			<div>
				<label>
					<span>Name</span>
					<input type="text" size="100" name="name" onChange={this._onChange} value={this.state.widget.name} />
				</label>
			</div>
			<div>
				<label>
					<span>Description</span>
					<textarea type="text" rows="4" cols="100" name="description" onChange={this._onChange} value={this.state.widget.description} />
				</label>
			</div>
			<div>
				<label>
					<span>Color</span>
					<select name="color" onChange={this._onChange} value={this.state.widget.color}>
						<option value="red">Red</option>
						<option value="blue">Blue</option>
						<option value="green">Green</option>
						<option value="orange">Orange</option>
						<option value="yellow">Yellow</option>
						<option value="purple">Purple</option>
					</select>
				</label>
			</div>
			<div>
				<label>
					<span>Size</span>
					<select name="size" onChange={this._onChange} value={this.state.widget.size}>
						<option value="tiny">Tiny</option>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
						<option value="huge">Huge</option>
					</select>
				</label>
			</div>
			<div>
				<label>
					<span>Quantity</span>
					<input type="number" size="6" name="quantity" onChange={this._onChange} value={this.state.widget.quantity} />
				</label>
			</div>
			<div>
				<button type="button" className="btn btn-primary" onClick={this._onSave}>Save</button>
				<button type="button" className="btn btn-danger" onClick={this._onDelete}>Delete</button>
				<button type="button" className="btn btn-default" onClick={this._onReturnToList}>Return to List</button>
			</div>
		</form></section>;
	}

};
