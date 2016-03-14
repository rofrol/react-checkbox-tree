import React from 'react';
import ReactDOM from 'react-dom';
import CheckboxTree from './components/CheckboxTree.js';

let state;

function setState(changes) {
	Object.assign(state, changes);
	ReactDOM.render(<CheckboxTree {...state} />, document.getElementById('app'));
}

function updateItems(event) {
	const items = state.items.map(current => ({
		name: current.name,
		id: current.id,
		checked: parseInt(event.target.value, 10) === current.id,
	}));
	setState({ items });
}

state = {
	items: [
		{ name: 'my name', id: 1, checked: false },
		{ name: 'my name2', id: 2, checked: false },
	],
	onChange: updateItems,
};

setState(state);
