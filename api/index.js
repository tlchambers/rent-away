const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const app = express();
const User = require('./models/User.js');

const bcryptSalt = bcrypt.genSaltSync(8);

app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: 'http://localhost:5173',
	})
);

app.get('/test', (req, res) => {
	res.json('test ok');
});

app.get('/register', (req, res) => {
	const { first, last, email, password } = req.body;
	res.json({ first, last, email, password });
});

app.post('/register', async (req, res) => {
	const { first, last, email, password } = req.body;
	try {
		const newUser = await User.create({
			first,
			last,
			email,
			password: bcrypt.hashSync(password, bcryptSalt),
		});

		console.log('user created');
		res.json({ newUser });
	} catch (err) {
		console.error(err.message);
		res.status;
		(422).json(err);
	}
});

app.listen(4000, () =>
	console.log(`RENT AWAY currently app listening on port ${4000}!`)
);

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('Mongodb Connected!'));
