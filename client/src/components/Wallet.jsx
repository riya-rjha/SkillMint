import React, { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { AppContext } from "../context/AppContext.jsx";
import abi from "../contract/abi.json";
import { Wallet } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const CONTRACT_ADDRESS = "0x390BdF96BE37813D2f078bbA98479545134151c6";
const HOLESKY_CHAIN_ID = "0x4268"; // 17000 in hexadecimal



export default function CourseStore() {
	const {
		account,
		setAccount,
		contract,
		setContract,
		setPurchasedCourses,
		setCoursePrices,
	} = useContext(AppContext);

	useEffect(() => {
		connectWallet();
		switchToHoleskyNetwork();

		// Add event listeners for account changes
		if (window.ethereum) {
			window.ethereum.on("accountsChanged", handleAccountChange);
		}

		// Cleanup function
		return () => {
			if (window.ethereum) {
				window.ethereum.removeListener("accountsChanged", handleAccountChange);
			}
		};
	}, []);

	useEffect(() => {
		if (contract && account) {
			checkPurchasedCourses();
			getCoursePrices();
		}
	}, [contract, account]);
	 const [status, setStatus] = useState("checking"); // 'checking', 'switching', 'success', 'error'
		const [message, setMessage] = useState("");
	const handleAccountChange = async (accounts) => {
		if (accounts.length === 0) {
			// User disconnected their wallet
			setAccount("");
			setPurchasedCourses({});
			// toast.error("Wallet disconnected");
		} else if (accounts[0] !== account) {
			// User switched accounts
			const newAccount = accounts[0];
			setAccount(newAccount);
			// toast("Wallet account changed", {
			// 	icon: "👛",
			// 	description: `${newAccount.slice(0, 6)}...${newAccount.slice(-4)}`,
			// });

			// Reconnect contract with new account
			if (window.ethereum) {
				const provider = new ethers.BrowserProvider(window.ethereum);
				const signer = await provider.getSigner();
				const contractInstance = new ethers.Contract(
					CONTRACT_ADDRESS,
					abi,
					signer
				);
				setContract(contractInstance);
			}
		}
	};

	const switchToHoleskyNetwork = async () => {
		if (typeof window.ethereum === "undefined") {
			setStatus("error");
			setMessage("MetaMask is not installed!");
			return;
		}

		try {
			const provider = new ethers.BrowserProvider(window.ethereum);
			const network = await provider.getNetwork();

			// Check if already on Holesky
			if (network.chainId === 17000) {
				setStatus("success");
				setMessage("Already connected to Holesky network");
				return;
			}

			setStatus("switching");
			setMessage("Switching to Holesky network...");

			try {
				// Try to switch to Holesky network
				await window.ethereum.request({
					method: "wallet_switchEthereumChain",
					params: [{ chainId: HOLESKY_CHAIN_ID }],
				});
				setStatus("success");
				setMessage("Successfully switched to Holesky network");
			} catch (switchError) {
				// This error code indicates that the chain has not been added to MetaMask
				if (switchError.code === 4902) {
					try {
						await window.ethereum.request({
							method: "wallet_addEthereumChain",
							params: [
								{
									chainId: HOLESKY_CHAIN_ID,
									chainName: "Holesky",
									nativeCurrency: {
										name: "Holesky ETH",
										symbol: "ETH",
										decimals: 18,
									},
									rpcUrls: ["https://holesky.drpc.org"],
									blockExplorerUrls: ["https://holesky.beaconcha.in"],
								},
							],
						});
						setStatus("success");
						setMessage("Successfully added and switched to Holesky network");
					} catch (addError) {
						setStatus("error");
						setMessage("Failed to add Holesky network: " + addError.message);
					}
				} else {
					setStatus("error");
					setMessage(
						"Failed to switch to Holesky network: " + switchError.message
					);
				}
			}
		} catch (error) {
			setStatus("error");
			setMessage("An error occurred: " + error.message);
		}
	};

	const connectWallet = async () => {
		try {
			if (window.ethereum) {
				// const connectToast = toast.loading("Connecting wallet...");

				const accounts = await window.ethereum.request({
					method: "eth_requestAccounts",
				});

				const provider = new ethers.BrowserProvider(window.ethereum);
				const signer = await provider.getSigner();

				const contractInstance = new ethers.Contract(
					CONTRACT_ADDRESS,
					abi,
					signer
				);

				setAccount(accounts[0]);
				setContract(contractInstance);

				// toast.success("Wallet connected successfully", {
				// 	id: connectToast,
				// 	icon: "✅",
				// 	description: `${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`,
				// });
			} else {
				// toast.error("Please install MetaMask to use this app");
			}
		} catch (err) {
			// toast.error("Failed to connect wallet: " + err.message);
		}
	};

	const checkPurchasedCourses = async () => {
		try {
			const courseAccessPromises = [1, 2, 3, 4, 5].map((courseId) =>
				contract.hasAccess(account, courseId)
			);

			const accessResults = await Promise.all(courseAccessPromises);

			const purchasedStatus = accessResults.reduce((acc, hasAccess, index) => {
				acc[index + 1] = hasAccess;
				return acc;
			}, {});

			setPurchasedCourses(purchasedStatus);
		} catch (err) {
			console.error("Error checking purchased courses:", err);
		}
	};

	const getCoursePrices = async () => {
		try {
			const pricePromises = [1, 2, 3, 4, 5].map((courseId) =>
				contract.getCoursePrice(courseId)
			);

			const prices = await Promise.all(pricePromises);

			const priceMap = prices.reduce((acc, price, index) => {
				acc[index + 1] = price;
				return acc;
			}, {});

			setCoursePrices(priceMap);
		} catch (err) {
			console.error("Error getting course prices:", err);
		}
	};

	const formatPrice = (price) => {
		if (!price) return "Loading...";
		return `${ethers.formatEther(price)} ETH`;
	};

	return (
		<div>
			<Toaster position='top-right' />
			<div>
				{!account ? (
					<button onClick={connectWallet} className='flex items-center'>
						<Wallet className='mr-2' /> Connect Wallet
					</button>
				) : (
					<div>
						<p className='flex items-center'>
							<Wallet className='mr-2' /> Connected Account:{" "}
							{account.slice(0, 6)}...{account.slice(-4)}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
