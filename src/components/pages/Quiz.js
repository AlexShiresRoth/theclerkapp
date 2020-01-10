import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout';
import QuizHeader from '../quiz/QuizHeader';
const Quiz = props => {
	return (
		<Layout>
			<QuizHeader />
		</Layout>
	);
};

Quiz.propTypes = {};

export default Quiz;
