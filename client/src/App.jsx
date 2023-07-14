import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';
import AccountPage from './pages/AccountPage';
import { UserContextProvider } from './UserContext';

function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<IndexPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/account" element={<AccountPage />} />
				</Route>
			</Routes>
		</UserContextProvider>
	);
}

export default App;
