import React from 'react';
import HelloColor from './HelloColor';
import Main from './Main';
import update from 'morphdom';
import h from 'h0';

import chroma from 'chroma-js';
import { hello } from './utility';
import bikeshed from '@jxnblk/bikeshed';

const link = h('a')({
	style: {
		color: 'inherit',
		fontWeight: 'bold',
		marginRight: 16,
	},
});

const button = h('button')({
	style: {
		fontFamily: 'inherit',
		fontSize: 14,
		fontWeight: 600,
		padding: 8,
		marginRight: 16,
		border: 0,
		borderRadius: 3,
		color: 'inherit',
		backgroundColor: 'rgba(0, 0, 0, .125)',
		WebkitAppearance: 'none',
		appearance: 'none',
	},
});

const App = ({ link, button, pre, label, input }) => {
	return (
		<div>
			{/* <Main /> */}
			{/* <HelloColor /> */}
		</div>
	);
};

export default App;
