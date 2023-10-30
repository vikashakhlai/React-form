import React from 'react';
import { refresh } from '../button/Button.jsx';
import styles from './Input.module.scss';

const Input = ({ id, text, type, placeholder, name }) => {
	return (
		<input
			id={id}
			className={styles.input}
			type={type}
			name={name}
			placeholder={placeholder}
			onChange={() => refresh()}
		>
			{text}
		</input>
	);
};

export default Input;
