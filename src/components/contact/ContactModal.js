import React from 'react';
import PropTypes from 'prop-types';
import modalStyle from './contactstyles/ContactModal.module.scss';
const ContactModal = ({ msg: { type, msg } }) => {
	return type !== '' ? (
		type === 'error' && typeof msg === 'object' ? (
			msg.map(err => {
				return (
					<div
						className={
							type === 'error'
								? `${modalStyle.modal} ${modalStyle.error}`
								: `${modalStyle.modal} ${modalStyle.success}`
						}
					>
						<p>{err.msg}</p>
					</div>
				);
			})
		) : (
			<div
				className={
					type === 'error'
						? `${modalStyle.modal} ${modalStyle.error}`
						: `${modalStyle.modal} ${modalStyle.success}`
				}
			>
				<p>{msg}</p>
			</div>
		)
	) : null;
};

ContactModal.propTypes = {
	msg: PropTypes.object.isRequired,
};

export default ContactModal;
