import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
	const [first, setFirst] = useState('');
	const [last, setLast] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	function registerUser(e) {
		e.preventDefault();
		fetch('http://localhost:4000/register', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				first: first,
				last: last,
				email: email,
				password: password,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('------1------', data);
			});
	}

	return (
		<div className="mt-4 grow flex items-center justify-center">
			<div className="mb-64">
				<h1 className="text-4xl text-center mb-4">Register</h1>
				<form className="max-w-md mx-auto" onSubmit={registerUser}>
					<input
						type="text"
						placeholder="First Name"
						value={first}
						onChange={(event) => setName(event.target.value)}
					/>
					<input
						type="text"
						placeholder="Last Name"
						value={last}
						onChange={(event) => setLast(event.target.value)}
					/>
					<input
						type="email"
						placeholder="your@email.com"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<input
						type="password"
						placeholder="password"
						value={Password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<button className="custom">Register</button>
					<div className="text-center py-2 text-gray-500">
						Already a memeber?{' '}
						<Link to={'/login'} className="underline text-black">
							Login
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RegisterPage;
