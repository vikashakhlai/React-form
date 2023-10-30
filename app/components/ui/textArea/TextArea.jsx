import React from 'react';

import { refresh } from '../button/Button.jsx';
import styles from './TextArea.module.scss';

const TextArea = ({ id, placeholder, name }) => {
	return (
		<textarea
			id={id}
			className={styles.textarea}
			placeholder={placeholder}
			name={name}
			onChange={() => refresh()}
		></textarea>
	);
};

export default TextArea;
