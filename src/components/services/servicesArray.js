import { readingSvg, mathSvg, writingSvg } from './servicesstyles/servicesSvgs';

export const services = [
	{
		icon: readingSvg,
		service: 'English',
		list: ['Meet Online at your convenience', 'Virtually connect with Zoom', 'Instant feedback'],
	},
	{
		icon: writingSvg,
		service: 'Writing',
		list: [
			'Access to personalized tutoring videos',
			'Tutoring in the comfort of your own home',
			'Video playback ability',
		],
	},
	{
		icon: mathSvg,
		service: 'Math',
		list: ['One on one sessions', 'Meet in person', 'Instant feedback'],
	},
];
