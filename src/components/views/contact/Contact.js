import React from 'react';
import {useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required"),
	email: yup.string()
	.email("Please enter a valid email")
	.required("Email is required"),
	comment: yup.string() 
	.required("Message must be minimum of 10 characters")
	.min(10, "Message must be minimum of 10 characters")
	
});

const Contact = () =>  {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log("data", data);
		
	}

	return (
		<>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<div className="form__element">
					<label className="form__label">First Name</label>
					<input className="form__input form__input--active" name="firstName" placeholder="Enter your first name" ref={register} />
					{errors.firstName && <p className="form__error">{errors.firstName.message}</p>}
				</div>

				<div className="form__element">
					<label className="form__label">Last Name</label>
					<input className="form__input form__input--active" name="lastName" placeholder="Enter your last name" ref={register} />
					{errors.lastName && <p className="form__error">{errors.lastName.message}</p>}
				</div>

				<div className="form__element">
					<label className="form__label">Email</label>
					<input className="form__input form__input--active" name="email" placeholder="Enter your email" ref={register} />
					{errors.email && <p className="form__error">{errors.email.message}</p>}
				</div>

				<div className="form__element">
					<label className="form__label">Message</label>
					<textarea className="form__message form__message--active" name="comment" placeholder="Enter text here..." ref={register}></textarea>
					{errors.comment && <p className="form__error">{errors.comment.message}</p>}
				</div>
				
				<div className="form__element">
					<label className="form__label"></label>
					<button className="form__btn-submit" type="submit">Submit</button>
				</div>
			</form>
		</>
	);
}

export default Contact;
