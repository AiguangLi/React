import React, { Component } from 'react';
import Joi from 'joi';

import Input from '@/components/common/input';
import Select from '@/components/common/select';

class Form extends Component {
	state = {
		data: {},
		errors: {},
	};

	handleSubmit = e => {
		e.preventDefault();
		const validatedResult = this.validate();

		// this.doSubmit应当放在回调中，要不由于异步操作，可能导致this.state.data的数据没完成更新就提交数据
		this.setState(
			{
				errors: validatedResult.errors || {},
				data: validatedResult.value,
			},
			this.doSubmit
		);
	};

	validate = () => {
		const { data } = this.state;

		// allowUnknown: true --> 允许未知的key，此时对未配置schema的不做校验
		const options = {
			abortEarly: false,
			allowUnknown: false,
		};

		// Joi会将验证后转换的数据放到value中，例如小数点精确度为2，实际输入的字符串会被转换为最多2位小数的数字
		// 因此，提交的时候需要将value赋值给state状态
		const { error, value } = Joi.object(this.validationSchema).validate(data, options);
		if (!error) return { value: value };

		const errors = {};
		for (let item of error.details) {
			errors[item.path[0]] = item.message;
		}

		return { errors: errors };
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

	renderSelect = (label, name, items, selected) => {
		return (
			<Select
				label={label}
				items={items}
				name={name}
				selected={selected}
				value={selected}
				onChange={this.handleOnChange}
			/>
		);
	};

	renderButton = (buttonName, type = 'submit') => {
		return (
			<button
				type={type}
				className="btn btn-primary"
				disabled={this.validate().errors || false}
				onClick={this.handleSubmit}
			>
				{buttonName}
			</button>
		);
	};
}

export default Form;
