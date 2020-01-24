import React from 'react';
import spinnerStyles from './LoadingSpinner.module.scss';
const LoadingSpinner = props => {
	const spinner = (
		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={spinnerStyles.index__marker}>
			<circle cx="50" cy="50" r="50" strokeWidth="5px" fillOpacity="0" strokeOpacity="1"></circle>
		</svg>
	);
	return <div className={spinnerStyles.spinner}>{spinner}</div>;
};

export default LoadingSpinner;
