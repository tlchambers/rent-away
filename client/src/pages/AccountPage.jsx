import React from 'react';
import { UserContext } from '../UserContext';

function AccountPage() {
	const { ready, user } = UserContext(UserContext);
	if (ready && !user) {
		return <Navigate to={'/login'} />;
	}
	return <div>Account page for {user?.name}</div>;
}

export default AccountPage;
