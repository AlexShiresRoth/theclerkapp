import React, { useEffect, useRef, useState } from 'react';
import { services } from './servicesArray';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { servicesImages } from './servicesImages';
import servicesStyles from './servicesstyles/ServicesMap.module.scss';
import ServicesIndexMarker from './ServiceIndexMarker';
//TODO debug scroll speed behavior

const ServicesMap = () => {
	const [position, setPosition] = useState('');
	const serviceRef = useRef();
	let animationRef = useRef();

	const scrollServicesUp = () => {
		if (serviceRef.current) {
			serviceRef.current.scrollTop = serviceRef.current.scrollTop -= serviceRef.current.getBoundingClientRect().height;
			animationRef = requestAnimationFrame(scrollServicesUp);
		}
		cancelAnimationFrame(animationRef);
	};
	const scrollServicesDown = () => {
		if (serviceRef.current) {
			serviceRef.current.scrollTop = serviceRef.current.scrollTop += serviceRef.current.getBoundingClientRect().height;
			animationRef = requestAnimationFrame(scrollServicesDown);
		}
		cancelAnimationFrame(animationRef);
	};
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
				<div className={servicesStyles.service__list}>
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
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					console.log(entry);
					setPosition('fixed');
				} else {
					setPosition('');
				}
			},
			{ rootMargin: '0px', threshold: 1 }
		);
		if (serviceRef.current) {
			observer.observe(serviceRef.current);
		}
	});
	return (
		<div className={servicesStyles.services__container} ref={serviceRef} style={{ position: position }}>
			{servicesMap}
			<ServicesIndexMarker />
		</div>
	);
};

export default ServicesMap;
