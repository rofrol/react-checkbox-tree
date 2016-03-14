import React from 'react';

const CheckboxTree = (props) =>
	<div>
		{props.items.map((current, i) =>
			<div key={i}>
				<input type="checkbox" checked={current.checked}
					value={current.id} onChange={props.onChange}
				/>
				<span>{current.name}</span>
			</div>
		)}
	</div>;

export default CheckboxTree;
