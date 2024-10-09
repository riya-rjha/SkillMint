import React, { useState, useEffect } from "react";
import { Award, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { ethers } from "ethers";
import nft from '../contract/nft.json'

const CONTRACT_ADDRESS = "0xe9CD2Eca8F9e161386FC6042e404A59c99Fa6989";
const IPFS_URI =
	"ipfs://bafkreihuxznkeq3gq2irt7ob2euvzjnuz6bmb6zytzm7iewns7jq6nh3ba";

const MintCertificateButton = () => {
	const [mintStatus, setMintStatus] = useState("checking");
	const [error, setError] = useState(null);
	const [account, setAccount] = useState(null);

	useEffect(() => {
		checkWalletAndMintStatus();
	}, []);

	const checkWalletAndMintStatus = async () => {
		try {
			if (!window.ethereum) {
				throw new Error("Please install MetaMask");
			}

			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});

			const account = accounts[0];
			setAccount(account);

			const provider = new ethers.BrowserProvider(window.ethereum);
			const contract = new ethers.Contract(
				CONTRACT_ADDRESS,
				nft,
				provider
			);

			const hasMinted = await contract.hasAddressMinted(account);

			setMintStatus(hasMinted ? "success" : "idle");
		} catch (error) {
			console.error("Failed to check mint status:", error);
			setError(error.message);
			setMintStatus("idle");
		}
	};

	const handleMintCertificate = async () => {
		if (mintStatus === "loading") return;

		setMintStatus("loading");
		setError(null);

		try {
			const provider = new ethers.BrowserProvider(window.ethereum);
			const signer = await provider.getSigner();
			const contract = new ethers.Contract(
				CONTRACT_ADDRESS,
				nft,
				signer
			);

			const transaction = await contract.mintNFT(IPFS_URI);
			await transaction.wait();

			setMintStatus("success");
		} catch (error) {
			console.error("Minting failed:", error);
			setError(error.message);
			setMintStatus("idle");
		}
	};

	const buttonConfig = {
		checking: {
			text: "Checking Status...",
			icon: <Loader2 className='h-4 w-4 animate-spin' />,
			className: "bg-gray-400 text-white",
		},
		idle: {
			text: "Mint Certificate",
			icon: (
				<Award className='text-lg h-4 w-4 transition-transform duration-300 group-hover:scale-110' />
			),
			className: "bg-[#3FA3A7] text-white hover:bg-[#307c7f] transition-all",
		},
		loading: {
			text: "Minting...",
			icon: <Loader2 className='h-4 w-4 animate-spin' />,
			className:
				"bg-[#3FA3A7] text-white opacity-90 hover:bg-[#307c7f] transition-all",
		},
		success: {
			text: "Certificate Minted!",
			icon: (
				<CheckCircle2 className='h-6 w-6 transition-transform duration-300' />
			),
			className: "bg-gray-300 text-gray-600",

		},
		error: {
			text: "Error Occurred",
			icon: <AlertCircle className='h-4 w-4' />,
			className: "bg-red-500 text-white",
		},
	};

	const currentButton = buttonConfig[mintStatus];

	return (
		<div className='flex flex-col items-center'>
			<button
				onClick={handleMintCertificate}
				disabled={
					mintStatus === "loading" ||
					mintStatus === "success" ||
					mintStatus === "checking"
				}
				className={`group relative overflow-hidden ${currentButton.className} mt-4 px-4 py-2 text-[16px] w-full rounded flex items-center gap-2 justify-center`}
			>
				{currentButton.icon}
				{currentButton.text}
			</button>
		</div>
	);
};

export default MintCertificateButton;
