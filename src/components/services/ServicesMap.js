import React, { useEffect, useRef, useState } from 'react';
import { services } from './servicesArray';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdClear } from 'react-icons/md';
import { servicesImages } from './servicesImages';
import servicesStyles from './servicesstyles/ServicesMap.module.scss';
import ServicesIndexMarker from './ServiceIndexMarker';
//TODO debug scroll speed behavior

const ServicesMap = () => {
	const [containerStyle, setContainerStyle] = useState({
		position: '',
		top: '0px',
	});
	const [currentIndex, setCurrentIndex] = useState(0);

	const serviceRef = useRef();
	let animationRef = useRef();

	const scrollServicesUp = () => {
		setCurrentIndex(prevIndex => (prevIndex -= 1));
		if (serviceRef.current) {
			serviceRef.current.scrollTop = serviceRef.current.scrollTop -= serviceRef.current.getBoundingClientRect().height;
			animationRef = requestAnimationFrame(scrollServicesUp);
		}
		cancelAnimationFrame(animationRef);
	};
	const scrollServicesDown = () => {
		setCurrentIndex(prevIndex => (prevIndex += 1));
		if (serviceRef.current) {
			serviceRef.current.scrollTop = serviceRef.current.scrollTop += serviceRef.current.getBoundingClientRect().height;
			animationRef = requestAnimationFrame(scrollServicesDown);
		}
		cancelAnimationFrame(animationRef);
	};
	const breakFromFixedPosition = e => {
		setContainerStyle({
			position: '',
			top: '0',
		});
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
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
					setContainerStyle({
						position: 'fixed',
						top: '0rem',
					});
				} else {
					setContainerStyle({
						position: '',
						top: '',
					});
				}
			},
			{ rootMargin: '0px', threshold: 1 }
		);
		if (serviceRef.current) {
			observer.observe(serviceRef.current);
		}
	}, []);
	return (
		<div className={servicesStyles.services__container} ref={serviceRef} style={{ ...containerStyle }}>
			{containerStyle.position === 'fixed' ? (
				<div className={servicesStyles.close__button} onClick={e => breakFromFixedPosition(e)}>
					<MdClear />
				</div>
			) : (
				<div className={servicesStyles.close__button__hidden}></div>
			)}
			{servicesMap}
			{containerStyle.position === 'fixed' ? (
				<ServicesIndexMarker index={currentIndex} services={services} />
			) : null}
		</div>
	);
};

export default ServicesMap;
