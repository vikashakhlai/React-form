import React from 'react';

export const closePopup = () => {
	const popup = document.getElementsByClassName('popup')[0];
	popup.classList.remove('show');
};

const Modal = () => {
	return (
		<div className='popup'>
			{/* <img
				className='popup-close-btn'
				src='../../../assets/images/close.svg'
				onClick={() => closePopup()}
			/> */}
			<div className='popup-close-btn' onClick={() => closePopup()}></div>
			<h4>Уведомление</h4>
			<p>Текст</p>
		</div>
	);
};

export default Modal;
