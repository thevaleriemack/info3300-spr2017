import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

{/*

var TestComponent = React.createClass({
	render: function () {
		var text;
		if (this.props.present) {
			text = 'Present';
		} else {
			text = 'Absent';
		}
		return (
			<div>{text}</div>
		);
	}
});

ReactDOM.render(
	<TestComponent present={true} />,
	document.getElementById('testing')
);

*/}