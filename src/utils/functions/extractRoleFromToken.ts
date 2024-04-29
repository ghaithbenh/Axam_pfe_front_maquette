import { jwtDecode } from 'jwt-decode';

// This function assumes the token is stored in localStorage
export const getRoleFromToken = () => {
	const token = localStorage.getItem('token');
	if (token) {
		try {
			const decoded = jwtDecode(token) as any;
			return decoded?.role; // Make sure your token has a 'role' claim
		} catch (error) {
			console.error('Failed to decode JWT', error);
		}
	}
	return null;
};
