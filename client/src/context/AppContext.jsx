// AppContext.jsx
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [account, setAccount] = useState("");
	const [contract, setContract] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [purchasedCourses, setPurchasedCourses] = useState({});
	const [coursePrices, setCoursePrices] = useState({});

	return (
		<AppContext.Provider
			value={{
				account,
				setAccount,
				contract,
				setContract,
				loading,
				setLoading,
				error,
				setError,
				success,
				setSuccess,
				purchasedCourses,
				setPurchasedCourses,
				coursePrices,
				setCoursePrices,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
