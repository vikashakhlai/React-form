import React from 'react';

import styles from './Button.module.scss';

export const refresh = () => {
	let elems = document.querySelectorAll('input');
	let textarea = document.querySelector('textarea');
	let ps = document.querySelectorAll('p');
	for (let el of elems) {
		el.classList.remove('red');
		textarea.classList.remove('red');
		ps.forEach(el => el.remove());
	}
};

function send() {
	refresh();
	let inputs = document.querySelectorAll('input');
	let textarea = document.querySelector('textarea');
	let regEmail =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	let emptyElem = [];

	if (!!textarea.value === false) {
		emptyElem.push(textarea);
	}
	for (let el of inputs) {
		if (el.type === 'email' && !regEmail.test(el.value)) {
			emptyElem.push(el);
		}
		if (!!el.value === false && el.type !== 'email') {
			emptyElem.push(el);
		}
	}
	for (let el of emptyElem) {
		let error = document.createElement('p');
		error.style.color = 'red';
		error.innerHTML = 'Error in field';
		el.classList.add('red');
		el.after(error);
	}

	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let phone = document.getElementById('phone');
	let message = document.getElementById('message');

	let data = JSON.stringify({
		name: name.value,
		email: email.value,
		phone: phone.value,
		message: message.value,
	});

	fetch('http://localhost:9090/api/test', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: data,
	})
		.then(resp => {
			return resp.json();
		})
		.then(json => {
			if (json.status === 'error') {
				alert(JSON.stringify(json.fields));
			}
			if (json.status === 'success') {
				let elems = document.querySelectorAll('input');
				let textarea = document.querySelector('textarea');
				for (let el of elems) {
					el.value = '';
				}
				textarea.value = '';
				alert(json.msg);
			}
		})
		.catch(error => console.error(error));
}

const Button = ({ type, text }) => {
	return (
		<button
			className={styles.button}
			onClick={e => {
				e.preventDefault();
				send();
			}}
			type={type}
		>
			{text}
		</button>
	);
};

export default Button;
