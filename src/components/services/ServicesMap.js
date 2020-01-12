import React from 'react';
import PropTypes from 'prop-types';
import { services } from './servicesArray';
import { servicesImages } from './servicesImages';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import servicesStyles from './servicesstyles/ServicesMap.module.scss';

const ServicesMap = ({ scrollServicesDown, scrollServicesUp, currentIndex }) => {
	const servicesMap = services.map((service, i) => {
		return (
			<div
				className={servicesStyles.service__container}
				style={{
					background: `url(${servicesImages[i] !== undefined ? servicesImages[i].img : ''})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
				}}
			>
				{i > 0 && i <= services.length - 1 ? (
					<MdKeyboardArrowUp className={servicesStyles.arrow__up} onClick={() => scrollServicesUp(i)} />
				) : null}
				<div className={servicesStyles.img__overlay}></div>
				<div className={servicesStyles.service__heading}>
					{service.icon}
					<h3>{service.service}</h3>
				</div>
				<div
					className={
						currentIndex === i
							? `${servicesStyles.current__slide} ${servicesStyles.service__list}`
							: `${servicesStyles.service__list}`
					}
				>
					{service.list.map(item => (
						<p>{item}</p>
					))}
				</div>
				{i >= 0 && i < services.length - 1 ? (
					<MdKeyboardArrowDown className={servicesStyles.arrow__down} onClick={() => scrollServicesDown(i)} />
				) : null}
			</div>
		);
	});
	return <>{servicesMap}</>;
};

ServicesMap.propTypes = {};

export default ServicesMap;
