import React, { Component } from 'react';
import Joi from 'joi';

import Input from '@/components/common/input';

class Form extends Component {
	state = {
		data: {},
		errors: {},
	};

	handleSubmit = e => {
		e.preventDefault();
		const error = this.validate();

		this.setState({
			errors: error || {},
		});

		this.doSubmit();
	};

	validate = () => {
		const { data } = this.state;
		const options = {
			abortEarly: false,
		};

		const { error } = Joi.object(this.validationSchema).validate(data, options);
		if (!error) return null;

		const errors = {};
		for (let item of error.details) {
			errors[item.path[0]] = item.message;
		}

		return errors;
	};

	//校验单个字段
	validateProperty = ({ name, value }) => {
		const property = { [name]: value };
		const options = { abortEarly: true };
		const schema = { [name]: this.validationSchema[name] };
		const { error } = Joi.object(schema).validate(property, options);

		return error ? error.details[0].message : null;
	};

	handleOnChange = ({ currentTarget: input }) => {
		const { data, errors } = this.state;
		data[input.name] = input.value;
		const error = this.validateProperty(input);
		if (error) errors[input.name] = error;
		else delete errors[input.name];

		this.setState({ data, errors });
	};

	renderInput = (label, name, type = 'text') => {
		return (
			<Input
				label={label}
				name={name}
				value={this.state.data[name]}
				type={type}
				onChange={this.handleOnChange}
				error={this.state.errors[name]}
			/>
		);
	};

	renderButton = (buttonName, type = 'submit') => {
		return (
			<button type={type} className="btn btn-primary" disabled={this.validate() || false}>
				{buttonName}
			</button>
		);
	};
}

export default Form;
