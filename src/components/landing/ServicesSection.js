import React from 'react';
import style from './ServicesSection.module.scss';
import { readingSvg, mathSvg, writingSvg } from './servicesSvgs';

const ServicesSection = (props) => {
	const blobSvg = (
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<path
				fill="#425F75"
				d="M50.3,-76.8C65.3,-68.6,77.7,-54.9,84,-39C90.4,-23.1,90.7,-5,85.6,10.5C80.6,26,70.1,38.9,58.7,49.3C47.2,59.7,34.7,67.6,20.4,73.5C6.2,79.5,-9.7,83.5,-23.2,79.3C-36.6,75.2,-47.6,63,-58.3,50.5C-69.1,38.1,-79.7,25.6,-83.5,10.9C-87.3,-3.7,-84.2,-20.4,-76.1,-33.3C-67.9,-46.1,-54.5,-55.1,-41,-64C-27.5,-73,-13.7,-81.9,1.9,-84.9C17.6,-88,35.2,-85.1,50.3,-76.8Z"
				transform="translate(100 100)"
			/>
		</svg>
	);
	const blobSvg2 = (
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<path
				fill="#425F75"
				d="M34.5,-55.6C46,-46.2,57.8,-39,62.4,-28.6C67.1,-18.2,64.6,-4.6,63.5,9.7C62.4,24.1,62.6,39.3,55.6,49.3C48.6,59.3,34.4,64.1,20.5,66.6C6.7,69.1,-6.9,69.3,-21.4,67.5C-35.9,65.7,-51.3,61.8,-64.3,52.5C-77.2,43.3,-87.7,28.7,-89,13.4C-90.3,-2,-82.4,-18,-72,-29.5C-61.5,-41.1,-48.4,-48,-36,-57C-23.6,-66,-11.8,-77,-0.2,-76.8C11.4,-76.5,22.9,-65,34.5,-55.6Z"
				transform="translate(100 100)"
			/>
		</svg>
	);
	const blobSvg3 = (
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<path
				fill="#425F75"
				d="M32.6,-48.9C43.4,-43.9,53.9,-36.7,61.6,-26.3C69.3,-15.9,74.1,-2.3,74.1,11.9C74,26.1,69.2,40.9,58.7,48C48.1,55.1,32,54.6,18.7,54.3C5.3,54,-5.2,53.9,-19.4,54.9C-33.6,55.9,-51.4,57.9,-58.5,50.3C-65.5,42.8,-61.9,25.6,-63.9,9.4C-65.8,-6.8,-73.5,-21.9,-70.1,-33.1C-66.7,-44.3,-52.2,-51.5,-38.7,-55.3C-25.1,-59.1,-12.6,-59.5,-0.8,-58.2C10.9,-57,21.9,-54,32.6,-48.9Z"
				transform="translate(100 100)"
			/>
		</svg>
	);
	return (
		<section className={style.section}>
			<div className={style.heading}>
				<h2>Tutoring Categories</h2>
				<p>
					The Clerk of Oxford Company offers a range of tutoring categories, from SAT & ACT prep to general
					categories: English, Math & Reading.
				</p>
			</div>
			<div className={style.grid}>
				<div className={style.row}>
					<div className={style.box}>
						<div className={style.bg_svg}>{blobSvg}</div>
						<h3>Reading</h3>
						<p>Gain a better grasp of reading comprehension.</p>
						<button>Learn More</button>
					</div>
					<div className={style.svg_container}>{readingSvg}</div>
				</div>
				<div className={style.row}>
					<div className={style.svg_container}>{writingSvg}</div>
					<div className={style.box}>
						<div className={style.bg_svg}>{blobSvg2}</div>
						<h3>Writing</h3>
						<p>
							Learn important writing skills that are valuable to maintain throughout your school career.
						</p>
						<button>Learn More</button>
					</div>
				</div>
				<div className={style.row}>
					<div className={style.box}>
						<div className={style.bg_svg}>{blobSvg3}</div>
						<h3>Math</h3>
						<p>Enhance your math abilities with a rigid practice structure.</p>
						<button>Learn More</button>
					</div>
					<div className={style.svg_container}>{mathSvg}</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
