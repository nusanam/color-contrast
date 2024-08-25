import React, { useState, useEffect } from 'react';

const ColorRow = ({ color, colors, handleInputClick }) => {
	const styleProps = {
		main: {
			display: 'flex',
			flexWrap: 'wrap',
			color: 'black',
			paddingBottom: '10vh',
			paddingTop: '10vh',
		},
		input: {
			fontFamily: 'Menlo, monospace',
			fontSize: 14,
			textAlign: 'center',
			padding: 1,
			maxWidth: '100%',
			color: 'inherit',
			backgroundColor: 'transparent',
			border: 0,
			outline: 'none',
			WebkitAppearance: 'none',
			appearance: 'none',
		},
	};
	const { main, input } = styleProps;
	return (
		<div style={{ ...main }}>
			{colors &&
				colors.map(color => {
					return (
						<div
							style={{
								flex: 'auto',
								padding: 8,
								margin: 16,
								backgroundColor: `${color}`,
								transition: 'background-color .5s ease-out',
							}}
							key={`${color}`}>
							<input
								readOnly
								style={{
									...input,
								}}
								title={'Click to select color value'}
								onClick={handleInputClick}
								name={`${color}`}
								value={`${color.toLowerCase()}`}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default ColorRow;

// const ColorRow = ({ color, colors }) => h('div')({
//   style: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     paddingTop: 64,
//     paddingBottom: 64,
//     backgroundColor: color
//   }
// })(
//   ...colors.map(color => h('div')({
//     style: {
//       flex: '1 1 auto',
//       padding: 8,
//       margin: 16,
//       backgroundColor: color,
//       transition: 'background-color .5s ease-out'
//     }
//   })(
//     input({
//       readonly: true,
//       title: 'Click to select color value',
//       onclick: e => {
//         e.stopPropagation()
//         e.target.setSelectionRange(0, e.target.value.length)
//       },
//       name: color,
//       value: color.toLowerCase()
//     })()
//   ))
// )
