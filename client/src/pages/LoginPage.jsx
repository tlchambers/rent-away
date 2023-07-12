import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);
	const { setUSer } = useContext(UserContext);
	async function fetchLogin(e) {
		e.preventDefault();
		try {
			const response = await fetch(
				'http://localhost:4000/login',
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				},
				{ withCredentials: true }
			);
			const userInfo = await response.json();
			setUSer(userInfo);
			alert('Login Sucessful');
			setRedirect(true);
		} catch (error) {
			console.log(error.message);
		}
	}

	if (redirect) {
		return <Navigate to={'/'} />;
	}

	return (
		<div className="mt-4 grow flex items-center justify-center">
			<div className="mb-64">
				<h1 className="text-4xl text-center mb-4">Login</h1>
				<form className="max-w-md mx-auto" onSubmit={fetchLogin}>
					<input
						type="email"
						placeholder="your@email.com"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(even) => setPassword(event.target.value)}
					/>
					<button className="custom">Login</button>
					<div className="text-center py-2 text-gray-500">
						Don't have an account yet?{' '}
						<Link to={'/register'} className="underline text-black">
							Register now
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LoginPage;
