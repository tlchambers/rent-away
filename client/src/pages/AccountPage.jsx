import React from 'react';
import { UserContext } from '../UserContext';

function AccountPage() {
	const { user } = UserContext(UserContext);
	return <div>Account page for {user.name}</div>;
}

export default AccountPage;
