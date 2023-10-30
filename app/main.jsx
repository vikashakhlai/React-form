import React from 'react';
import ReactDOM from 'react-dom/client';
import InputMask from 'react-input-mask';
import './assets/styles/index.scss';
import Button, { refresh } from './components/ui/button/Button.jsx';
import Input from './components/ui/input/Input.jsx';
import TextArea from './components/ui/textArea/TextArea.jsx';

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
			{/* <textarea placeholder='Enter message' /> */}
			<TextArea id='message' name='message' placeholder='Enter message' />
			<Button type='input' text='Send' />
		</form>
	</>
);
