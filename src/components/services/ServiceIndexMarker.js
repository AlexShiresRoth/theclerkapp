import React from 'react';
import PropTypes from 'prop-types';
import indexboxStyles from './servicesstyles/ServiceIndexMarker.module.scss';
const ServiceIndexMarker = ({ index, services }) => {
	const marker = (
		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={indexboxStyles.index__marker}>
			<circle cx="50" cy="50" r="50" stroke-width="25px" fill-opacity="0" stroke-opacity="1"></circle>
		</svg>
	);
	const markerMap = services.map((item, i) => {
		return (
			<div
				className={
					index === i
						? `${indexboxStyles.index__marker} ${indexboxStyles.current}`
						: `${indexboxStyles.index__marker} `
				}
			>
				{marker}
			</div>
		);
	});
	return <div className={indexboxStyles.index__box}>{markerMap}</div>;
};

ServiceIndexMarker.propTypes = {
	index: PropTypes.number.isRequired,
};

export default ServiceIndexMarker;
