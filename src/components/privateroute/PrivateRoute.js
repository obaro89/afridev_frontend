import React from 'react';
import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

	return (
		<Route
			{...rest}
			render={(props) =>
				!isAuthenticated && !isLoading ? (
					<Redirect to='/login' />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PrivateRoute;
