import React from 'react';
//Must receive an array of objects
export const convertToHtml = queryArray => {
	if (typeof queryArray !== 'object') return null;
	if (queryArray.length <= 0) return null;

	const queryMap = queryArray.map((query, i) => {
		//check types for proper html tags
		return <>{query.type === 'paragraph' ? <p key={i}>{query.text}</p> : <p key={i}>Type not found</p>}</>;
	});
	return queryMap;
};
