import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Color from './components/Color';
import '../src/styles.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<Color />
	</StrictMode>
);
