import React from 'react';
import ReactDOM from 'react-dom/client';
import InputMask from 'react-input-mask';
import './assets/styles/index.scss';
import Button, { refresh } from './components/ui/button/Button.jsx';
import Input from './components/ui/input/Input.jsx';
import Modal from './components/ui/modal/Modal.jsx';
import TextArea from './components/ui/textArea/TextArea.jsx';

// import { showPopup } from './components/ui/modal/Modal.jsx';

export const showPopup = () => {
	const popup = document.getElementsByClassName('popup')[0];
	const body = document.querySelector('body');
	popup.classList.add('show');
	body.style.overscrollBehavior = 'contain';
};

ReactDOM.createRoot(document.getElementById('app')).render(
	<>
		<h1>Form</h1>
		<form className='main-form'>
			<Input id='name' type='text' name='name' placeholder='Enter name' />
			<Input id='email' type='email' name='email' placeholder='Enter e-mail' />
			<InputMask
				id='phone'
				onChange={() => refresh()}
				className='phone-input'
				mask='+375 99 999 99 99'
				placeholder='Enter number'
				name='phone'
			/>
			<TextArea id='message' name='message' placeholder='Enter message' />
			<Button type='input' text='Send' />
		</form>
		<Modal />
		<button className='button-modal' onClick={() => showPopup()}>
			модальное окно уведомления
		</button>
	</>
);
