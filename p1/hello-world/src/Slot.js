import React, { Component } from "react";
import './Slot.css';

class Slot extends Component {
	render() {
		return(
			<div className="Slot">
				<div className="Slot-header">
					<h1>{this.props.heading}</h1>
				</div>
				<div className="Slot-content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Slot;