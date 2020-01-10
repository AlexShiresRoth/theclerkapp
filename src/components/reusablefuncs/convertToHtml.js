export const convertToHtml = string => {
	const textArray = typeof string !== 'function' ? string.split(/<p>|<\/p>/g) : null;
	console.log(textArray);
	return { __html: string };
};
