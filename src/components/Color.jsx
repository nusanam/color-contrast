import React, { useState, useEffect } from 'react';
import ColorRow from './ColorRow';

import chroma from 'chroma-js';
import { hello, generateHex } from './utility';

function Color() {
	const [result, setResult] = useState({});
	const [color, setColor] = useState('');
	const [helloBox, setHelloBox] = useState({});
	const [preText, setPreText] = useState([]);

	const propStyles = {
		main: {
			fontFamily: 'Inter, sans-serif',
			color,
			backgroundColor: result.base,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
			minHeight: '50vh',
			// padding: 30,
			transitionProperty: 'color, background-color',
			transitionTimingFunction: 'ease-out',
			transitionDuration: '1s, .5s',
			cursor: 'pointer',
			WebkitUserSelect: 'none',
			userSelect: 'none',
		},
		h1: {
			fontSize: 'calc(2em + 1vw)',
			padding: 32,
			color: result.base,
			leterSpacing: '0.5em',
			backgroundColor: color,
			// WebkitTextStroke: '1px',
			// -webkit-text-stroke',
			WebkitTextStrokeColor: color,
			transitionProperty: 'color, background-color',
			transitionTimingFunction: 'ease-out',
			transitionDuration: '1s, .5s',
		},
		pre: {
			fontFamily: 'Menlo, monospace',
			fontSize: 16,
			// padding: 16,
			transitionTimingFunction: '',
			transitionDuration: '0',
		},
		label: {
			position: 'absolute',
			height: 1,
			width: 1,
			overflow: 'hidden',
			clip: 'rect(1px,1px,1px,1px)',
		},
		input: {
			fontFamily: 'Menlo, monospace',
			fontSize: 14,
			textAlign: 'center',
			padding: 16,
			maxWidth: '100%',
			color: 'inherit',
			backgroundColor: 'transparent',
			border: 0,
			outline: 'none',
			WebkitAppearance: 'none',
			appearance: 'none',
		},
	};
	const { h1, h1c, btn, pre, input, label, main } = propStyles;

	const getBackground = () => {
		const resultFromHello = hello(color, {
			saturation: 1 / 8,
			contrast: 3,
			hues: 5,
		});
		if (resultFromHello) {
			setResult(resultFromHello);
		}
	};

	const initiate = async () => {
		try {
			const hex = generateHex();
			if (hex) {
				setColor(hex);
			}
			if (color) {
				getBackground();
				getText();
			}
		} catch (e) {
			console.log('Error on click: ', e);
		}
	};

	useEffect(() => {
		initiate();
		getBackground();
	}, []);

	const getText = () => {
		const getPre = determineContrast({
			backgroundColor: result.base,
			...result,
		});
		setPreText(getPre);
		const hello = getHelloBox();
		setHelloBox(hello);
	};

	const determineContrast = ({ color, backgroundColor, ...props }) => {
		let level = 'AA Large';
		if (props.contrast > 7) {
			level = 'AA';
		}
		if (props.contrast > 4.5) {
			level = 'AAA';
		}
		let contrastText = Math.round(props.contrast * 100) / 100;

		const preText = `
    ${contrastText} contrast
    ${level}
  `
			.replace(/[\n\s]+/g, ' ')
			.trim();
		return !isNaN(contrastText) && preText;
	};

	const getHelloBox = () => {
		const canvas = document.createElement('canvas');
		canvas.width = 800;
		canvas.height = 600;

		const ctx = canvas.getContext('2d');
		ctx.font = '48px sans-serif';
		ctx.textAlign = 'center';
		ctx.fillText('hello', 400, 50);

		const img = canvas.toDataURL();

		return img;
	};

	const handleInputClick = e => {
		e.stopPropagation();
		e.target.setSelectionRange(0, e.target.value.length);
	};

	console.log(
		'%c%s%c%s',
		`padding:4px;color:${result.color};background-color:${result.base}`,
		' Aa ',
		'color:black',
		' ' + result.color + ' ' + result.base
	);

	// const baseText = `${result.base}` ?? ' ';
	// const valueText = `${color.toUpperCase()}` + ` ${baseText?.toUpperCase()}`;

	const colorText = `${color.toUpperCase()}`;
	const baseText = `${result?.base}`;
	console.log('baseText: ', `${result?.base}`);
	// style={{ color}}

	return (
		<>
			{color && (
				<>
					<main
						style={{ ...main }}
						onClick={e => initiate()}>
						<div
							style={{
								fontSize: '2.5vw',
								letterSpacing: '.3em',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								// marginBottom: '64px',
							}}>
							<h1
								style={{
									// textTransform: 'uppercase',
									fontSize: 'calc(2em + 1vw)',
									padding: 31,
									letterSpacing: '.1em',
									// outline: `1px solid ${color}`,
								}}>
								marhaba
							</h1>
							<h1 style={{ ...h1 }}>color</h1>
						</div>
						<label
							style={{ ...label }}
							htmlFor='colors'
						/>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								flexDirection: 'row',
								fontFamily: 'Menlo, monospace',
								fontSize: 16,
								// marginBottom: '64px',
							}}>
							<span
								style={{
									// outline: `1px solid ${color}`,
									color,
									padding: 4,
								}}>
								{colorText}
							</span>
							<span
								style={{
									// backgroundColor: color,
									color,
									// : result?.base,
									padding: 5,
								}}>
								{baseText ? baseText?.toUpperCase() : 'hey'}
							</span>
						</div>
						<input
							style={{ ...input }}
							readOnly
							title={'Click to select a color'}
							onClick={handleInputClick}
							name='colors'
							// value={valueText}
						/>
						<pre style={{ ...pre }}>{preText}</pre>
					</main>
					{result && (
						<div
							style={{
								fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
								fontSize: 14,
                minHeight: '50vh',
								// padding: 32,
								// color: base,
								backgroundColor: color,
							}}>
							<ColorRow
								color={color}
								handleInputClick={handleInputClick}
								colors={result?.scale?.slice(0, result?.scale?.length - 1)}
							/>
							<ColorRow
								color={color}
								handleInputClick={handleInputClick}
								colors={result?.hues}
							/>
						</div>
					)}
				</>
			)}
		</>
	);
}

export default Color;
