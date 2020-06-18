import React from 'react';
import Layout from '../layout/Layout';
import ContactHeader from '../contact/ContactHeader';
import ContactForm from '../contact/ContactForm';
const Contact = () => {
	return (
		<Layout>
			<ContactHeader />
			<ContactForm />
		</Layout>
	);
};

export default Contact;
