import React, { useState } from 'react';
import axios from 'axios';
import ContactModal from './ContactModal';
import formStyles from './contactstyles/ContactForm.module.scss';
import LoadingSpinner from './LoadingSpinner';

const ContactForm = () => {
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [isLoading, setLoading] = useState(false);
	const [modalMsg, setModalMsg] = useState({
		type: '',
		msg: '',
	});

	const onChange = e => {
		if (e) e.preventDefault();
		setInputs({ ...inputs, [e.target.name]: [e.target.value] });
	};

	const { name, email, subject, message } = inputs;

	const formSubmit = async e => {
		if (e) e.preventDefault();

		const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

		setLoading(true);

		return await axios({
			method: 'POST',
			url: `${corsAnywhere}https://asrserver.herokuapp.com/api/clerkapp/send-email?email=${email}&name=${name}&subject=${subject}&message=${message}`,
			data: {
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:3000/',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			},
		})
			.then(res => {
				console.log(res.data.msg);
				setLoading(false);
				setModalMsg({
					type: 'success',
					msg: res.data.msg,
				});

				setTimeout(() => {
					setInputs({
						name: '',
						email: '',
						subject: '',
						message: '',
					});
					setModalMsg({
						type: '',
						msg: '',
					});
				}, 6000);
			})
			.catch(err => {
				setLoading(false);
				setModalMsg({
					type: 'error',
					msg: err.response.data.msg,
				});
				setTimeout(() => {
					setModalMsg({
						type: '',
						msg: '',
					});
				}, 6000);
			});
	};

	return (
		<div className={formStyles.container}>
			{isLoading ? <LoadingSpinner /> : <ContactModal msg={modalMsg} />}
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

export default ContactForm;
