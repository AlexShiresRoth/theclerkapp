import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import formStyles from './contactstyles/ContactForm.module.scss';

const ContactForm = props => {
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [loading, setLoadingState] = useState(false);

	const onChange = e => {
		if (e) e.preventDefault();
		setInputs({ ...inputs, [e.target.name]: [e.target.value] });
	};

	const { name, email, subject, message } = inputs;

	const formSubmit = async e => {
		if (e) e.preventDefault();

		const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

		setLoadingState(true);

		const res = await axios({
			method: 'POST',
			url: `${corsAnywhere}https://asrserver.herokuapp.com/api/clerkapp/send-email?email=${email}&name=${name}&subject=${subject}&message=${message}`,
			data: {
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:3000/',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			},
		});

		console.log(res);
	};

	return (
		<div className={formStyles.container}>
			<form className={formStyles.form} onSubmit={e => formSubmit(e)}>
				<div className={formStyles.input__row}>
					<label>Name</label>
					<input
						value={name}
						onChange={e => onChange(e)}
						name="name"
						type="text"
						placeholder="Emma Johnson"
						required
					/>
				</div>
				<div className={formStyles.input__row}>
					<label>Email</label>
					<input
						value={email}
						onChange={e => onChange(e)}
						name="email"
						type="email"
						placeholder="student@gmail.com"
						required
					/>
				</div>
				<div className={formStyles.input__row}>
					<label>Subject</label>
					<input
						value={subject}
						onChange={e => onChange(e)}
						name="subject"
						type="text"
						placeholder="Math, writing, reading..."
						required
					/>
				</div>
				<div className={formStyles.input__row}>
					<label>Message</label>
					<textarea
						value={message}
						onChange={e => onChange(e)}
						name="message"
						type="text"
						placeholder="Hi, I would like to inquire about your rates."
						required
					/>
				</div>
				<div className={formStyles.input__row}>
					<button onClick={e => formSubmit(e)}>Submit</button>
				</div>
			</form>
		</div>
	);
};

ContactForm.propTypes = {};

export default ContactForm;
