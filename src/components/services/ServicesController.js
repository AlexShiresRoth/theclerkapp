import React, { useEffect, useRef, useState } from 'react';
import { services } from './servicesArray';
import { MdClear } from 'react-icons/md';
import IntersectionObserver from 'intersection-observer-polyfill';
import servicesStyles from './servicesstyles/ServicesController.module.scss';
import ServicesIndexMarker from './ServiceIndexMarker';
import ServicesMap from './ServicesMap';

const ServicesController = () => {
	const [containerStyle, setContainerStyle] = useState({
		position: '',
		left: '0px',
	});
	const [currentIndex, setCurrentIndex] = useState(0);
	const [intersecting, setIntersecting] = useState(false);

	const serviceRef = useRef();

	const scrollServicesUp = (e, i) => {
		e.stopPropagation();

		if (serviceRef.current && intersecting) {
			serviceRef.current.scrollLeft = serviceRef.current.scrollLeft -= serviceRef.current.getBoundingClientRect().width;
		}
		setCurrentIndex(i - 1);
	};
	const scrollServicesDown = (e, i) => {
		e.stopPropagation();
		if (serviceRef.current && intersecting) {
			serviceRef.current.scrollLeft = serviceRef.current.scrollLeft += serviceRef.current.getBoundingClientRect().width;
		}
		setCurrentIndex(i + 1);
	};

	const breakFromFixedPosition = e => {
		if (e) e.stopPropagation();
		//restart index on exit
		setCurrentIndex(0);
		if (serviceRef.current) serviceRef.current.scrollLeft = 0;
		setContainerStyle({
			position: 'relative',
			left: '0',
		});

		window.scrollTo({
			top: '0',
		});
	};

	//On resize move to top of window and 0 index so the slides do not break
	const handleResize = () => breakFromFixedPosition();

	useEffect(() => {
		//resize breaks current scroll position of slides
		window.addEventListener('resize', handleResize);

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.intersectionRatio >= 0.7) {
					setCurrentIndex(0);
					setContainerStyle({
						position: 'fixed',
						left: '0rem',
					});
					setIntersecting(true);
				} else {
					setContainerStyle({
						position: 'relative',
						left: '',
					});
					setIntersecting(false);
				}
			},
			{ rootMargin: '50px', threshold: 0.9 }
		);

		if (serviceRef.current) observer.observe(serviceRef.current);
		else observer.unobserve(serviceRef.current);

		return () => {
			observer.unobserve(serviceRef.current);
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div className={servicesStyles.services__container} ref={serviceRef} style={{ ...containerStyle }}>
			{containerStyle.position === 'fixed' ? (
				<button className={servicesStyles.close__button} onClick={e => breakFromFixedPosition(e)}>
					<MdClear />
				</button>
			) : (
				<div className={servicesStyles.close__button__hidden}></div>
			)}
			<ServicesMap
				scrollServicesUp={scrollServicesUp}
				scrollServicesDown={scrollServicesDown}
				currentIndex={currentIndex}
				intersecting={intersecting}
			/>
			{containerStyle.position === 'fixed' ? (
				<ServicesIndexMarker index={currentIndex} services={services} />
			) : null}
		</div>
	);
};

export default ServicesController;
