// const express = require('express');
// const cors = require('cors');
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
const app = express();

const port = 9090;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/registration', (req, res) => {
	if (Math.random() > 0.5) {
		res.statusCode = 400;

		setTimeout(() => {
			res.send({
				status: 'error',
				message: 'Bad request',
			});
		}, Math.random() * 1000);

		return;
	}

	setTimeout(() => {
		res.statusCode = 200;
		res.send({
			status: 'success',
			message: 'You are registered',
		});
	}, Math.random() * 1000);
});

app.post('/api/test', (req, res) => {
	console.log(req.body);
	let { name, email, phone, message } = req.body;
	let regEmail =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	let result = {};
	result = { status: 'error', ...result };
	if (!!name == false)
		result.fields = { ...result.fields, name: 'Пустое поле' };
	if (!!email == false)
		result.fields = { ...result.fields, email: 'Пустое поле' };
	if (!regEmail.test(email)) {
		result.fields = { ...result.fields, email: 'Неверный email' };
	}
	if (!!phone == false)
		result.fields = { ...result.fields, phone: 'Пустое поле' };
	if (!!message == false)
		result.fields = { ...result.fields, message: 'Пустое поле' };
	if (!!message && !!name && !!phone && !!email && regEmail.test(email)) {
		result = { status: 'success', msg: 'Ваша заявка успешно отправлена' };
	}
	res.json(result);
});

app.get('/api/ping', (req, res) => {
	res.statusCode = 200;
	res.send({
		status: 'success',
		message: 'Server is ready',
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
