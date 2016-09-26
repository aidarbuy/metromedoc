import React, { Component } from 'react';

export default class TestLab extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section>
				<Title render={(previousTitle) => `TestLab - ${previousTitle}`} />

				<h3>TestLab</h3>

			</section>
		);
	}
}