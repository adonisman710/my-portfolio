import React from "react"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"

import "./style.scss"

type FormProp = {
	onclose: Function
}
const ContactForm: React.FC<FormProp> = ({onclose}) => {
	const closeModal = () => {
		onclose(false)
	}

	return (
		<div onClick={closeModal} className="contact-form">
			<div className="form__inner">
				<HighlightOffIcon className="form__close" onClick={closeModal} />{" "}
				<h3 className="form__loader">loading..</h3>
			</div>
		</div>
	)
}

export default ContactForm
